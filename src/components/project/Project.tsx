import ProjectProp from "../../models/prop/ProjectProp";
import ProjectModel from "../../models/ProjectModel";
import "./Project.scss";

export default function Project(projectProp: ProjectProp) {
    const projectModel: ProjectModel = projectProp.projectModel;

    return (
        <div id="Project">
            {projectModel.codepenSlug}
        </div>
    );
}