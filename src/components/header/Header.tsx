import './Header.scss';
import ThemeSwitcher from "../theme-switcher/ThemeSwitcher";

export default function Header() {
    return (
        <div id="Header">
            <header>
                CSS Budddyz
            </header>
            <ThemeSwitcher/>
        </div>
    )
}