import Nav from "../../components/Nav";
import {A} from "@solidjs/router";
import './Home.scss';

export default function Home() {
    return (
        <div id="Home">
            <Nav/>
            A place to showcase all of ours css projects
            <A href="/">Home</A>
            <A href="/red">Red</A>
            <A href="/bee">Bee</A>
            <A href="/blink">Blink</A>
            <A href="/eye">Eye</A>
            <A href="/brush-cursor">Brush Cursor</A>
            <A href="/eight">Eight</A>
            <A href="/slightly-smiling">Slightly Smiling</A>
            <A href="/floating-navigation">Floating Navigation</A>
            <A href="/switch">Switch</A>
            <A href="/pacman">Pacman</A>
            <A href="/rolex">Rolex</A>
            <A href="/smile-injection">Smile Injection</A>
            <A href="/santa">Santa</A>
            <A href="/butterfly"></A>
        </div>
    );
}