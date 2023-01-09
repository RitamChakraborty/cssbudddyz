import './Switch.scss';
import ProjectHeader from "../../components/project-header/ProjectHeader";

export default function Switch() {
    return (
        <>
            <ProjectHeader/>
            <div id="Switch">
                <input type="checkbox" id="incDec"/>
            </div>
        </>
    );
}