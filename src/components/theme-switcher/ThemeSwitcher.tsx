import "./ThemeSwitcher.scss";
import {createSignal} from "solid-js";

export default function ThemeSwitcher() {
    const [angle, setAngle] = createSignal<number>(0);

    function changeTheme() {
        setAngle((value) => (value + 0.18));
        console.log(angle());
    }

    return (
        <div
            id="ThemeSwitcher"
            style={{
                transform: `rotate(${angle() * 1000}deg)`
            }}
        >
            <div class="theme light" onclick={changeTheme}>
                <i class="fa-regular fa-sun"></i>
            </div>
            <div class="theme dark" onclick={changeTheme}>
                <i class="fa-regular fa-moon"></i>
            </div>
        </div>
    );
}