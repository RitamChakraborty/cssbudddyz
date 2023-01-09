import './Ripple.scss';
import ProjectHeader from "../../components/project-header/ProjectHeader";

export default function Ripple() {
    return (
        <>
            <ProjectHeader/>
            <div id="Ripple">
                <div class="container">
                    <div class="d1"></div>
                    <div class="d2"></div>
                    <div class="d3"></div>
                    <div class="d4"></div>
                    <div class="d5"></div>
                    <div class="d6"></div>
                </div>
            </div>
        </>
    );
}