import "./ThemeSwitcher.scss";
import {createSignal, onMount} from "solid-js";
import ThemeSwitcherService from "../../service/ThemeSwitcherService";
import {Theme} from "../../utils/Theme";

export default function ThemeSwitcher() {
    const [angle, setAngle] = createSignal<number>(0);
    const themeSwitcherService = ThemeSwitcherService();

    onMount(() => {
        if (themeSwitcherService.theme() === Theme.DARK) {
            changeThemeWrapper();
        }
    })

    function changeThemeWrapper() {
        setAngle((value) => (value + 0.18));
    }

    function changeTheme() {
        changeThemeWrapper();
        themeSwitcherService.changeAppTheme();
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