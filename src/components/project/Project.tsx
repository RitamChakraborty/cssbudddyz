import ProjectProp from "../../models/prop/ProjectProp";
import ProjectModel from "../../models/ProjectModel";
import "./Project.scss";
import IconButton from "../icon-button/IconButton";
import {useNavigate} from "@solidjs/router";

export default function Project(projectProp: ProjectProp) {
    const projectModel: ProjectModel = projectProp.projectModel;
    const navigate = useNavigate();

    function handleCodepen() {
        open(`https://codepen.io/RitamChakraborty/pen/${projectModel.codepenSlug}?layout=left&editors=1100`);
    }

    function handlePreview() {
        navigate(projectModel.endpoint);
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
                    <IconButton icon="fa-brands fa-codepen" onPressed={handleCodepen}/>
                    <IconButton icon="fa-solid fa-arrow-up-right-from-square" onPressed={handlePreview}/>
                </div>
            </div>
        </div>
    );
}