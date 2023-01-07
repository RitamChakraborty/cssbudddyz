import {createSignal} from "solid-js";

enum Theme {
    LIGHT,
    DARK
}

const [theme, setTheme] = createSignal<Theme>(Theme.LIGHT);
const bodyClassList = document.body.classList;
const darkThemeClass = 'dark-theme';

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

export {changeAppTheme};