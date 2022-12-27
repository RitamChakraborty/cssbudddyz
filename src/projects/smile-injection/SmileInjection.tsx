import {onMount} from "solid-js";
import './SmileInjection.scss';

export default function SmileInjection() {
    onMount(() => {
        const liquid: HTMLDivElement = document.querySelector(".liquid");
        const mouth: HTMLDivElement = document.querySelector("#mouth");
        const handle: HTMLDivElement = document.querySelector(".handle");
        const push: HTMLDivElement = document.querySelector(".push");

        handle.onclick = () => {
            liquid.classList.add("liquid-animation");
            push.style.visibility = "hidden";
            let i = 0;

            const interval = setInterval(() => {
                switch (i) {
                    case 10 : {
                        mouth.classList.remove("mouth-smile");
                        mouth.classList.add("mouth-impartial")
                        break;
                    }
                    case 20: {
                        mouth.classList.remove("mouth-impartial")
                        mouth.classList.add("mouth-sad");
                        clearInterval(interval);
                        break;
                    }
                }

                i++;
            }, 100);
        }
    });

    return (
        <div id="SmileInjection">
            <div class="container">
                <div class="smiley">
                    <div class="eyes">
                        <div class="eye"></div>
                        <div class="eye"></div>
                    </div>
                    <div id="mouth" class="mouth-smile"></div>
                </div>
                <div class="injection">
                    <div class="needle"></div>
                    <div class="syringe"></div>
                    <div class="head"></div>
                    <div class="pusher">
                        <div class="liquid"></div>
                        <div class="tip">
                            <div class="tip-head"></div>
                            <div class="strip"></div>
                            <div class="space"></div>
                            <div class="strip"></div>
                            <div class="space"></div>
                        </div>
                        <div class="handle"></div>
                        <div class="handle-end"></div>
                        <div class="push">PUSH</div>
                    </div>
                </div>
            </div>
        </div>
    );
}