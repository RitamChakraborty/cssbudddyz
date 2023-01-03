import './Projects.scss';
import {createSignal, For} from "solid-js";
import Project from "../project/Project";
import ProjectModel from "../../models/ProjectModel";

export default function Projects() {
    const projectsUrls: readonly ProjectModel[] = [
        {endpoint: '/clock', codepenSlug: 'xxJZapm'},
        {codepenSlug: 'oNwqNgy', endpoint: 'switch'},
        {codepenSlug: 'RwgMVZQ', endpoint: 'blink'},
        {codepenSlug: 'YzQJrXB', endpoint: 'eye'},
        {codepenSlug: 'XWBXMpY', endpoint: 'santa'},
        {codepenSlug: 'mdjVjZY', endpoint: 'bee'},
        {codepenSlug: 'poZgOyP', endpoint: 'brush-cursor'},
        {codepenSlug: 'eYjJLWM', endpoint: 'butterfly'},
        {codepenSlug: 'xxJZapm', endpoint: 'clock'},
        {codepenSlug: 'zYLrJjm', endpoint: 'eight'},
        {codepenSlug: 'wvxMEXg', endpoint: 'slightly-smiling'},
        {codepenSlug: 'qBybMeW', endpoint: 'pacman'},
        {codepenSlug: 'wvxMYBr', endpoint: 'red'},
        {codepenSlug: 'poZgxJZ', endpoint: 'ripple'},
        {codepenSlug: 'KKBVGdB', endpoint: 'rocket'},
        {codepenSlug: 'eYjJPZX', endpoint: 'rolex'},
        {codepenSlug: 'RwBreVp', endpoint: 'smile-injection'}
    ];
    const n = projectsUrls.length;
    const [currentIndex] = createSignal<number>(Math.floor(n / 2));

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

    return (
        <div id="Projects">
            <div class="container">
                <For<ProjectModel> each={projectsUrls}>{(project, index) =>
                    <div class="card" style={createStyleForCard(index())}>
                        <Project projectModel={project}/>
                    </div>
                }</For>
            </div>
        </div>
    )
}