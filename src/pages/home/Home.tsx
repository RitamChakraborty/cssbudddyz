import './Home.scss';
import {createSignal, For} from "solid-js";
import Header from "../../components/header/Header";

export default function Home() {
    const projectsUrls: readonly Project[] = [
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
        {codepenSlug: 'mdjVGYE', endpoint: 'floating-navigation'},
        {codepenSlug: 'qBybMeW', endpoint: 'pacman'},
        {codepenSlug: 'wvxMYBr', endpoint: 'red'},
        {codepenSlug: 'poZgxJZ', endpoint: 'ripple'},
        {codepenSlug: 'KKBVGdB', endpoint: 'rocket'},
        {codepenSlug: 'eYjJPZX', endpoint: 'rolex'},
        {codepenSlug: 'RwBreVp', endpoint: 'smile-injection'}
    ];
    const n = projectsUrls.length;
    const [currentIndex] = createSignal<number>(n / 2);

    function createStyleForCard(index: number) {
        let marginLeft = '';
        let marginRight = '';
        let zIndex = n;
        let transform = 'perspective(1000px)';

        if (index === 0) {
            marginLeft = `calc(50vw - ((var(--card-width) / 2) * ${currentIndex() + 1}))`;
        }

        if (index < currentIndex()) {
            marginRight = '-250px';
            zIndex = n - (currentIndex() - index);
            transform += ' rotateY(30deg) scale(0.8)';
        } else if (index > currentIndex()) {
            marginLeft = '-250px';
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
        <div id="Home">
            <Header/>
            <div class="container">
                <For<Project> each={projectsUrls}>{(project, index) =>
                    <div class="card" style={createStyleForCard(index())}>
                        {project.codepenSlug}
                    </div>
                }</For>
            </div>
        </div>
    );
}