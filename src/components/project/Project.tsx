import ProjectProp from "../../models/prop/ProjectProp";
import ProjectModel from "../../models/ProjectModel";
import "./Project.scss";

export default function Project(projectProp: ProjectProp) {
    const projectModel: ProjectModel = projectProp.projectModel;

    return (
        <div id="Project">
            <div
                class="project-overview"
                style={{
                    "background-image": `url(https://shots.codepen.io/RitamChakraborty/pen/${projectModel.codepenSlug}-512.webp)`
                }}
            ></div>
            <div class="footer"></div>
        </div>
    );
}