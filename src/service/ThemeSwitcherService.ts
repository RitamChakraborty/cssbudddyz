import {createSignal, onMount} from "solid-js";
import {Theme} from "../utils/Theme";


const [theme, setTheme] = createSignal<Theme>(Theme.LIGHT);

export default function ThemeSwitcherService() {
    let bodyClassList;
    let darkThemeClass;

    onMount(() => {
        bodyClassList = document.body.classList;
        darkThemeClass = 'dark-theme';
        const currentTheme: Theme = getCurrentTheme();

        if (currentTheme === Theme.DARK) {
            changeAppTheme();
        }
    });

    function getCurrentTheme(): Theme {
        if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
            return Theme.DARK;
        }

        return Theme.LIGHT;
    }

    function setLightTheme() {
        if (bodyClassList.contains(darkThemeClass)) {
            bodyClassList.remove(darkThemeClass)
        }
    }

    function setDarkTheme() {
        bodyClassList.add(darkThemeClass);
    }

    function changeAppTheme() {
        setTheme((value) => {
            switch (value) {
                case Theme.LIGHT: {
                    setDarkTheme()
                    return Theme.DARK;
                }
                case Theme.DARK: {
                    setLightTheme();
                    return Theme.LIGHT;
                }
            }
        })
    }

    return {theme, changeAppTheme};
}