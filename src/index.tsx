import {render} from 'solid-js/web';
import {JSX} from "solid-js";
import App from "./App";

const code = (): JSX.Element => <App/>;

render(code, document.getElementById('root') as HTMLElement);
