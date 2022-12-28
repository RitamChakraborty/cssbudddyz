import Nav from "../../components/Nav";
import {A} from "@solidjs/router";
import './Home.scss';

export default function Home() {
    return (
        <div id="Home">
                <Nav/>
                A place to showcase all of ours css projects
                <ul>
                        <li><A href="/">Home</A></li>
                        <li><A href="/red">Red</A></li>
                        <li><A href="/bee">Bee</A></li>
                        <li><A href="/blink">Blink</A></li>
                        <li><A href="/eye">Eye</A></li>
                        <li><A href="/brush-cursor">Brush Cursor</A></li>
                        <li><A href="/eight">Eight</A></li>
                        <li><A href="/slightly-smiling">Slightly Smiling</A></li>
                        <li><A href="/floating-navigation">Floating Navigation</A></li>
                        <li><A href="/switch">Switch</A></li>
                        <li><A href="/pacman">Pacman</A></li>
                        <li><A href="/rolex">Rolex</A></li>
                        <li><A href="/smile-injection">Smile Injection</A></li>
                        <li><A href="/santa">Santa</A></li>
                        <li><A href="/butterfly">Butterfly</A></li>
                        <li><A href="/ripple">Ripple</A></li>
                        <li><A href="/clock">Clock</A></li>
                        <li><A href="/rocket">Rocket</A></li>
                </ul>
        </div>
    );
}