import {RouteDefinition, Router, Route} from "@solidjs/router";
import {PROJECT_MODELS} from "./config/Config";
import Home from "./pages/home/Home";

export default function App() {
    const base = '/cssbudddyz';
    const routes: RouteDefinition[] = [
        {
            path: `${base}/`,
            component: Home
        },
        ...PROJECT_MODELS.map((projectModel) => {
            return {
                path: `${base}/${projectModel.endpoint}`,
                component: projectModel.component
            }
        })
    ];
    return (
        <Router>
            {routes.map((r: RouteDefinition) => (
                <Route path={r.path} component={r.component} />
            ))}
        </Router>
    );
}