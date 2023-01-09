import IconButton from "../icon-button/IconButton";
import {useNavigate} from "@solidjs/router";
import "./ProjectHeader.scss";

export default function ProjectHeader() {
    const navigate = useNavigate();

    function navigateBack() {
        navigate('/')
    }

    return (
        <div id="ProjectHeader">
            <IconButton icon="fa-solid fa-arrow-left" onPressed={navigateBack}/>
            <header>CSS Budddyz</header>
            <div class="pull-down">
                <i class="fa-solid fa-angle-down"></i>
            </div>
        </div>
    );
}