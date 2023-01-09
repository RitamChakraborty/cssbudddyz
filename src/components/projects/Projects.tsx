import './Projects.scss';
import {createSignal, For, onMount} from "solid-js";
import Project from "../project/Project";
import ProjectModel from "../../models/ProjectModel";
import {PROJECT_MODELS} from "../../config/Config";

export default function Projects() {
    const n = PROJECT_MODELS.length;
    const [currentIndex, setCurrentIndex] = createSignal<number>(0);
    let projects;

    onMount(() => {
        const middle = Math.floor(n / 2);
        const interval = setInterval(() => {
            if (currentIndex() === middle - 1) {
                clearInterval(interval);
            }
            scrollRight();
        }, 300);

        let touchstartX = 0;
        let touchendX = 0;

        projects.addEventListener('touchstart', function (event: TouchEvent) {
            touchstartX = event.touches[0].screenX;
        }, false);

        projects.addEventListener('touchend', function (event: TouchEvent) {
            touchendX = event.changedTouches[0].screenX;
            handleGesture();
        }, false);

        function handleGesture() {
            if (touchendX > touchstartX) {
                scrollLeft()
            } else if (touchendX < touchstartX) {
                scrollRight()
            }
        }
    })

    function createStyleForCard(index: number) {
        let marginLeft = '';
        let marginRight = '';
        let zIndex = n;
        let transform = 'perspective(1000px)';

        if (index === 0) {
            marginLeft = `calc(50vw - ((var(--card-width) / 2) * ${currentIndex() + 1}))`;
        }

        if (index < currentIndex()) {
            marginRight = 'calc(var(--card-width) / 2 * -1)';
            zIndex = n - (currentIndex() - index);
            transform += ' rotateY(30deg) scale(0.8)';
        } else if (index > currentIndex()) {
            marginLeft = 'calc(var(--card-width) / 2 * -1)';
            zIndex = n - index;
            transform += ' rotateY(-30deg) scale(0.8)';
        }

        return {
            "margin-left": marginLeft,
            "margin-right": marginRight,
            "z-index": zIndex,
            transform: transform,
        }
    }

    function scrollLeft() {
        if (currentIndex() === 0) {
            return;
        }

        setCurrentIndex((value) => value - 1);
    }

    function scrollRight() {
        if (currentIndex() === n - 1) {
            return;
        }

        setCurrentIndex((value) => value + 1);
    }

    return (
        <div id="Projects" ref={projects}>
            <div class="container">
                <For<ProjectModel> each={PROJECT_MODELS}>{(project, index) =>
                    <div class="card" style={createStyleForCard(index())}>
                        <Project projectModel={project}/>
                    </div>
                }</For>
            </div>
            <div class="scroll left">
                <button onclick={scrollLeft}>
                    <i class="fa-solid fa-chevron-left"></i>
                </button>
            </div>
            <div class="scroll right">.
                <button onclick={scrollRight}>
                    <i class="fa-solid fa-chevron-right"></i>
                </button>
            </div>
        </div>
    )
}