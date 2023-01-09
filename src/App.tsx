import {RouteDefinition, Router, useRoutes} from "@solidjs/router";
import {lazy} from "solid-js";
import {PROJECT_MODELS} from "./config/Config";

export default function App() {
    const lazyImport = (path: string) => lazy(() => import(path));

    const routes: RouteDefinition[] = [
        {
            path: '/',
            component: lazyImport('./pages/home/Home')
        },
        ...PROJECT_MODELS.map((projectModel) => {
            return {
                path: `/${projectModel.endpoint}`,
                component: lazyImport(`./projects/${projectModel.endpoint}/${projectModel.title}`)
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