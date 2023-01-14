import './Projects.scss';
import {createSignal, For, onMount, Show} from "solid-js";
import Project from "../project/Project";
import {PROJECT_MODELS, SCROLLING_ANIMATION_DELAY, SWIPE_THRESHOLD} from "../../config/Config";
import ProjectCardService from "../../service/ProjectCardService";
import {Constant} from "../../utils/Constant";

export default function Projects() {
    const projectCardService = ProjectCardService();
    const n = PROJECT_MODELS.length;
    const [currentIndex, setCurrentIndex] = createSignal<number>(0);
    let projects;

    onMount(() => {
        initialAnimation();
        handleTouchInput();
        handleKeyboardInput()
    });

    function initialAnimation() {
        const interval = setInterval(() => {
            if (currentIndex() === projectCardService.currentCardIndex()) {
                clearInterval(interval);
                return;
            }
            scrollRightWrapper();
        }, SCROLLING_ANIMATION_DELAY);
    }

    function handleTouchInput() {
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
            if (touchendX - touchstartX >= SWIPE_THRESHOLD) {
                scrollLeft()
            } else if (touchstartX - touchendX >= SWIPE_THRESHOLD) {
                scrollRight()
            }
        }
    }

    function handleKeyboardInput() {
        window.document.addEventListener('keydown', (e) => {
            if (e.code === Constant.ARROW_LEFT) {
                scrollLeft();
            } else if (e.code === Constant.ARROW_RIGHT) {
                scrollRight();
            }
        });
    }

    function createStyleForCard(index: number) {
        let marginLeft = '';
        let marginRight = '';
        let zIndex = n;
        let transform = 'perspective(1000px)';
        let pointerEvent = "none";

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
        } else {
            pointerEvent = "inherit";
        }

        return {
            "margin-left": marginLeft,
            "margin-right": marginRight,
            "z-index": zIndex,
            transform: transform,
            "pointer-events": pointerEvent
        }
    }

    function scrollingLeftPossible() {
        return currentIndex() !== 0;
    }

    function scrollLeft() {
        if (!scrollingLeftPossible()) {
            return;
        }

        setCurrentIndex((value) => value - 1);
        projectCardService.decrementCurrentCardIndex();
    }

    function scrollingRightPossible() {
        return currentIndex() !== n - 1;
    }

    function scrollRight() {
        if (!scrollingRightPossible()) {
            return;
        }

        setCurrentIndex((value) => value + 1);
        projectCardService.incrementCurrentCardIndex();
    }

    function scrollRightWrapper() {
        setCurrentIndex((value) => value + 1);
    }

    return (
        <div id="Projects" ref={projects}>
            <div class="container">
                <For each={PROJECT_MODELS}>{(project, index) =>
                    <div class="card" style={createStyleForCard(index())}>
                        <Project projectModel={project} focused={index() === currentIndex()}/>
                    </div>
                }</For>
            </div>
            <Show<boolean> when={scrollingLeftPossible()} keyed>
                <div class="scroll left">

                    <button onclick={scrollLeft}>
                        <i class="fa-solid fa-chevron-left"></i>
                    </button>
                </div>
            </Show>
            <Show<boolean> when={scrollingRightPossible()} keyed>
                <div class="scroll right">
                    <button onclick={scrollRight}>
                        <i class="fa-solid fa-chevron-right"></i>
                    </button>
                </div>
            </Show>
        </div>
    )
}
