import './Clock.scss';
import {onMount} from "solid-js";

export default function Clock() {
    onMount(() => {
        const clock: HTMLDivElement = document.querySelector(".clock");
        const year: HTMLDivElement = document.querySelector(".year");
        const month: HTMLDivElement = document.querySelector(".month");
        const day: HTMLDivElement = document.querySelector(".day");
        const hour: HTMLDivElement = document.querySelector(".hour");
        const minute: HTMLDivElement = document.querySelector(".minute");
        const second: HTMLDivElement = document.querySelector(".second");
        let rotation1 = 0;
        let rotation2 = 30;

        setInterval(() => {
            const date = new Date();
            year.innerText = date.getFullYear().toString();
            month.innerText = date.getMonth().toString();
            day.innerText = date.getDay().toString();
            hour.innerText = date.getHours().toString();
            minute.innerText = date.getMinutes().toString();
            second.innerText = date.getSeconds().toString();

            const clockAnimation = clock.animate(
                [
                    {transform: `translate(-50%, 0) rotate(${rotation1}deg)`},
                    {transform: `translate(-50%, 0) rotate(${rotation2}deg)`}
                ], {
                    fill: 'forwards',
                    easing: 'linear',
                    duration: 500,
                }
            );

            clockAnimation.play();

            if (rotation2 === 360) {
                rotation2 = 0;
            }

            rotation1 = rotation2;
            rotation2 += 30;
        }, 1000);
    });

    return (
        <div id="Clock">
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
            <link href="https://fonts.googleapis.com/css2?family=Nunito&display=swap" rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css2?family=Qahiri&display=swap" rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css2?family=Lemon&display=swap" rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css2?family=Poller+One&display=swap"
                  rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css2?family=Sofia&display=swap"
                  rel="stylesheet"/>
            <div class="container">
                <div class="timer-container">
                    <div class="timer">
                        <div class="time-field">
                            <div class="value year"></div>
                            <div class="label">Year</div>
                        </div>
                        <div class="time-field">
                            <div class="value month"></div>
                            <div class="label">Month</div>
                        </div>
                        <div class="time-field">
                            <div class="value day"></div>
                            <div class="label">Day</div>
                        </div>
                        <div class="time-field">
                            <div class="value hour"></div>
                            <div class="label">Hour</div>
                        </div>
                        <div class="time-field">
                            <div class="value minute"></div>
                            <div class="label">Minute</div>
                        </div>
                        <div class="time-field">
                            <div class="value second"></div>
                            <div class="label">Second</div>
                        </div>
                    </div>
                    <div class="indicator"></div>
                    <div class="notification-center"></div>
                </div>
            </div>
            <div class="clock">
                <div class="mark">
                    <div class="index"></div>
                    <div class="index"></div>
                </div>
                <div class="mark">
                    <div class="index"></div>
                    <div class="index"></div>
                </div>
                <div class="mark">
                    <div class="index"></div>
                    <div class="index"></div>
                </div>
                <div class="mark">
                    <div class="index"></div>
                    <div class="index"></div>
                </div>
                <div class="mark">
                    <div class="index"></div>
                    <div class="index"></div>
                </div>
                <div class="mark">
                    <div class="index"></div>
                    <div class="index"></div>
                </div>
            </div>
        </div>
    );
}