import './Rocket.scss';
import {onMount} from "solid-js";
import ProjectHeader from "../../components/project-header/ProjectHeader";

export default function Rocket() {
    onMount(() => {
        let ignitionCountdown = -3;
        const eye1: HTMLDivElement = document.querySelector(".eye-1");
        const eye2: HTMLDivElement = document.querySelector(".eye-2");
        const mouth: HTMLDivElement = document.querySelector(".mouth");
        const ignitionCountdownContainer: HTMLDivElement = document.querySelector(".ignition-countdown-container");
        const ignitionCountdownDiv: HTMLDivElement = document.querySelector(".ignition-countdown");
        const rocketContainer: HTMLDivElement = document.querySelector(".rocket-container");
        const rocket: HTMLDivElement = document.querySelector(".rocket");
        const fires: NodeListOf<HTMLDivElement> = document.querySelectorAll(".fire");
        const boom: HTMLDivElement = document.querySelector(".boom");
        rocketContainer.style.display = "grid";

        const ignitionInterval = setInterval(() => {
            if (ignitionCountdown <= 0) {
                ignitionCountdownDiv.innerText = `${ignitionCountdown}`;
            }

            switch (ignitionCountdown) {
                case -3: {
                    break;
                }
                case -2: {
                    // Eye 1 change
                    eye1.classList.remove("eye");
                    eye1.classList.add("eye-i-2");
                    // Eye 2 change
                    eye2.classList.remove("eye");
                    eye2.classList.add("eye-i-2");
                    // Mouth change
                    mouth.classList.remove("m");
                    mouth.classList.add("mouth-i-2");
                    break;
                }
                case -1: {
                    // Eye change
                    eye2.classList.remove("eye-i-2");
                    eye2.classList.add("eye-2-i-1");
                    // Mouth change
                    mouth.classList.remove("mouth-i-2");
                    mouth.classList.add("mouth-i-1");
                    break;
                }
                case 0: {
                    rocket.classList.add("rocket-animation-1");
                    setTimeout(() => {
                        for (let i = 0; i < fires.length; ++i) {
                            const fire = fires[i];
                            fire.style.visibility = "visible";
                        }
                    }, 600);
                    break;
                }
                case 1: {
                    ignitionCountdownContainer.classList.add("ignition-countdown-container-animation");
                    rocket.classList.remove("rocket-animation-1");
                    rocket.classList.add("rocket-animation-2");
                    break;
                }
                case 5: {
                    rocket.classList.add("rocket-animation-3");
                    break;
                }
                case 6: {
                    rocket.style.visibility = "hidden";
                    for (let i = 0; i < fires.length; ++i) {
                        const fire = fires[i];
                        fire.style.visibility = "hidden";
                    }
                    boom.classList.add("boom-animation");
                    break;
                }
                case 7: {
                    wishHappyAnniversary();
                    break;
                }
                case 15: {
                    clearInterval(ignitionInterval);
                    break;
                }
                default: {

                }
            }

            ++ignitionCountdown;
        }, 1000);

        function wishHappyAnniversary() {
            let anniversaryCountdown = 0;
            const happy: HTMLDivElement = document.querySelector(".happy");
            const friendship: HTMLDivElement = document.querySelector(".friendship");
            const anniversary: HTMLDivElement = document.querySelector(".anniversary");
            const happyArr = ['H', 'A', 'P', 'P', 'Y'];
            const friendshipArr = ['N', 'E', 'W'];
            const anniversaryArr = ['Y', 'E', 'A', 'R'];

            const anniversaryInterval = setInterval(() => {
                if (anniversaryCountdown < happyArr.length) {
                    happy.innerText += happyArr[anniversaryCountdown];
                } else if (anniversaryCountdown > happyArr.length &&
                    anniversaryCountdown - happyArr.length - 1 < friendshipArr.length) {
                    friendship.innerText += friendshipArr[anniversaryCountdown - happyArr.length - 1];
                } else if (anniversaryCountdown > happyArr.length + friendshipArr.length &&
                    anniversaryCountdown - happyArr.length - friendshipArr.length - 1 < anniversaryArr.length) {
                    anniversary.innerText += anniversaryArr[anniversaryCountdown - happyArr.length - friendshipArr.length - 1];
                } else if (anniversaryCountdown > happyArr.length + friendshipArr.length + anniversaryArr.length) {
                    happy.classList.add("happy-animation");
                    friendship.classList.add("friendship-animation");
                    anniversary.classList.add("anniversary-animation");
                    clearInterval(anniversaryInterval);
                }

                ++anniversaryCountdown;
            }, 100);
        }
    });

    return (
        <>
            <ProjectHeader/>
            <div id="Rocket">
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                <link href="https://fonts.googleapis.com/css2?family=Nunito&display=swap" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css2?family=Qahiri&display=swap" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css2?family=Lemon&display=swap" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css2?family=Poller+One&display=swap"
                      rel="stylesheet"/>
                <div class="rocket-container">
                    <div class="rocket-placeholder">
                        <div class="ignition-countdown-container">
                            <div class="ignition-countdown"></div>
                        </div>
                        <div class="boom">
                            <p>BooM!</p>
                        </div>
                        <div class="anniversary-container">
                            <div class="wish happy"></div>
                            <div class="wish friendship"></div>
                            <div class="wish anniversary"></div>
                        </div>
                        <div class="rocket">
                            <div class="head"></div>
                            <div class="body">
                                <div class="stripes">
                                    <div class="stripe"></div>
                                    <div class="stripe"></div>
                                    <div class="stripe"></div>
                                    <div class="stripe"></div>
                                </div>
                                <div class="face">
                                    <div class="eyes">
                                        <div class="eye eye-1"></div>
                                        <div class="eye eye-2"></div>
                                    </div>
                                    <div class="mouth-container">
                                        <div class="m mouth"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="tail"></div>
                            <div class="ignition">
                                <div class="fire fire1"></div>
                                <div class="fire fire2"></div>
                                <div class="fire fire3"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}