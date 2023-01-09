import './Blink.scss';
import ProjectHeader from "../../components/project-header/ProjectHeader";

export default function Blink() {
    return (
        <>
            <ProjectHeader/>
            <div id="Blink">
                <div class="eyes">
                    <div class="eye-container">
                        <div class="lid-container">
                            <div class="lid lid1"></div>
                        </div>
                        <div class="wrapper">
                            <div class="eye">
                                <div class="iris">
                                    <div class="retina"></div>
                                </div>
                            </div>
                            <div class="lid lid2"></div>
                        </div>
                    </div>
                    <div class="eye-container">
                        <div class="lid-container">
                            <div class="lid lid1"></div>
                        </div>
                        <div class="wrapper">
                            <div class="eye">
                                <div class="iris">
                                    <div class="retina"></div>
                                </div>
                            </div>
                            <div class="lid lid2"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}