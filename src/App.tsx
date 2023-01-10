import {RouteDefinition, Router, useRoutes} from "@solidjs/router";
import {lazy} from "solid-js";
import {PROJECT_MODELS} from "./config/Config";
import Home from "./pages/home/Home";

export default function App() {
    const routes: RouteDefinition[] = [
        {
            path: '/',
            component: Home
        },
        ...PROJECT_MODELS.map((projectModel) => {
            return {
                path: `/${projectModel.endpoint}`,
                component: projectModel.component
            }
        })
    ];
    const Routes = useRoutes(routes);
    return (
        <Router>
            <Routes/>
        </Router>
    );
}