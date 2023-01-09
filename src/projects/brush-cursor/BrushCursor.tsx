import './BrushCursor.scss';
import ProjectHeader from "../../components/project-header/ProjectHeader";

export default function BrushCursor() {
    return (
        <>
            <ProjectHeader/>
            <div id="BrushCursor">
                <div class="container">
                    <div class="p p1">Merry Christmas</div>
                    <div class="p p2">Merry Christmas</div>
                    <div class="p p3">
                        Merry Christmas
                        <div class="cursor"></div>
                    </div>
                </div>
            </div>
        </>
    );
}