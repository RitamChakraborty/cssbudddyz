import './Bee.scss';
import ProjectHeader from "../../components/project-header/ProjectHeader";

export default function Bee() {
    return (
        <>
            <ProjectHeader/>
            <div id="Bee">
                <div class="bee">
                    <div class="wing wing-1"></div>
                    <div class="wing wing-2"></div>
                    <div class="sting"></div>
                    <div class="antenna-wrapper antenna-wrapper-1">
                        <div class="antenna"></div>
                        <div class="tip"></div>
                    </div>
                    <div class="body">
                        <div class="stripe strip-1"></div>
                        <div class="stripe strip-2"></div>
                        <div class="stripe strip-3"></div>
                    </div>
                    <div class="antenna-wrapper antenna-wrapper-2">
                        <div class="antenna"></div>
                        <div class="tip"></div>
                    </div>
                    <div class="smile"></div>
                    <div class="eye"></div>
                </div>
            </div>
        </>
    );
}