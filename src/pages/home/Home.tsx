import './Home.scss';
import Header from "../../components/header/Header";
import Projects from "../../components/projects/Projects";

export default function Home() {
    return (
        <div id="Home">
            <Header/>
            <Projects/>
        </div>
    );
}