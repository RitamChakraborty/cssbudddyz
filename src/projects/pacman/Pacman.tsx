import './Pacman.scss';
import ProjectHeader from "../../components/project-header/ProjectHeader";

export default function Pacman() {
    return (
        <>
            <ProjectHeader/>
            <div id="Pacman">
                <div class="container">
                    <div class="head"></div>
                    <div class="mouth"></div>
                </div>
            </div>
        </>
    );
}