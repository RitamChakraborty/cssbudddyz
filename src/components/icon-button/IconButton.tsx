import "./IconButton.scss";

interface IconButtonProps {
    icon: string;
    onPressed: () => void;
}

export default function IconButton(props: IconButtonProps) {
    return (
        <button id="IconButton" onclick={props.onPressed}>
            <i class={props.icon}></i>
        </button>
    );
}