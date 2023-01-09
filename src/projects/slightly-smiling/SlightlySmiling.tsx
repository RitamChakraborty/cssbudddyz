import './SlightlySmiling.scss';
import ProjectHeader from "../../components/project-header/ProjectHeader";

export default function SlightlySmiling() {
    return (
        <>
            <ProjectHeader/>
            <div id="SlightlySmiling">
                <div class="container">
                    <div class="face">
                        <div class="eyes">
                            <div class="eye eye1"></div>
                            <div class="eye eye2"></div>
                        </div>
                        <div class="smile"></div>
                    </div>
                </div>
            </div>
        </>
    );
}