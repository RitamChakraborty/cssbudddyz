import ProjectProp from "../../models/prop/ProjectProp";
import ProjectModel from "../../models/ProjectModel";
import "./Project.scss";

export default function Project(projectProp: ProjectProp) {
    const projectModel: ProjectModel = projectProp.projectModel;

    function handleCodepen() {
        open(`https://codepen.io/RitamChakraborty/pen/${projectModel.codepenSlug}`);
    }

    function handlePreview() {
        open(`/${projectModel.endpoint}`);
    }

    return (
        <div id="Project">
            <div
                class="project-overview"
                style={{
                    "background-image": `url(https://shots.codepen.io/RitamChakraborty/pen/${projectModel.codepenSlug}-512.webp)`
                }}
            ></div>
            <div class="footer">
                <div class="title">{projectModel.codepenSlug}</div>
                <div class="nav">
                    <button onclick={handleCodepen}><i class="fa-brands fa-codepen"></i></button>
                    <button onclick={handlePreview}><i class="fa-solid fa-arrow-up-right-from-square"></i></button>
                </div>
            </div>
        </div>
    );
}