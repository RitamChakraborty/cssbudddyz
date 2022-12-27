import {Route, Router, Routes} from '@solidjs/router';
import {render} from 'solid-js/web';
import Home from "./pages/home/Home";
import Bee from './projects/bee/Bee';
import Blink from './projects/blink/Blink';
import Red from "./projects/red/Red";
import Eye from "./projects/eye/Eye";
import BrushCursor from "./projects/brush-cursor/BrushCursor";
import Eight from "./projects/eight/Eight";
import SlightlySmiling from "./projects/evil-smile/SlightlySmiling";
import FloatingNavigation from "./projects/floating-navigation/FloatingNavigation";

render(() => (
        <Router>
            <Routes>
                <Route path="/" component={Home}/>
                <Route path="/red" component={Red}/>
                <Route path="/bee" component={Bee}/>
                <Route path="/blink" component={Blink}/>
                <Route path="/eye" component={Eye}/>
                <Route path="/brush-cursor" component={BrushCursor}/>
                <Route path="/eight" component={Eight}/>
                <Route path="/slightly-smiling" component={SlightlySmiling}/>
                <Route path="/floating-navigation" component={FloatingNavigation}/>
            </Routes>
        </Router>
    ),
    document.getElementById('root') as HTMLElement
);
