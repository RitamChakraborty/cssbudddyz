import {Route, Router, Routes} from '@solidjs/router';
import {render} from 'solid-js/web';
import Home from "./pages/home/Home";
import Red from "./projects/red/Red";

render(() => (
        <Router>
            <Routes>
                <Route path="/" component={Home}/>
                <Route path="/red" component={Red}/>
            </Routes>
        </Router>
    ),
    document.getElementById('root') as HTMLElement
);
