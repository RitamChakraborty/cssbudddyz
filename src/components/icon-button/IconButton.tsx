import "./IconButton.scss";
import {IconButtonProps} from "../../models/prop/IconButtonProps";

export default function IconButton(props: IconButtonProps) {
    return (
        <button id="IconButton" onclick={props.onPressed} disabled={props.disabled}>
            <i class={props.icon}></i>
        </button>
    );
}