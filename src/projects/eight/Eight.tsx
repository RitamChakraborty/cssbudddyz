import "./Eight.scss";
import ProjectHeader from "../../components/project-header/ProjectHeader";

export default function Eight() {
    return (
        <>
            <ProjectHeader/>
            <div id="Eight">
                <div class="container">
                    <div class="half-circle c1"></div>
                    <div class="half-circle b b1"></div>
                    <div class="half-circle b b2"></div>
                    <div class="half-circle c2"></div>
                </div>
                <p>HOVER</p>
            </div>
        </>
    )
}