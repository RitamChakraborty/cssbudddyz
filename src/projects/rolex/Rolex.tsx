import {onCleanup, onMount} from "solid-js";
import ProjectHeader from "../../components/project-header/ProjectHeader";
import './Rolex.scss';

export default function Rolex() {
    let animation;

    onMount(() => {
        calculateAngle();

        animation = setInterval(() => {
            calculateAngle();
        }, 1000);

        function calculateAngle() {
            const time = new Date();
            const sec = time.getSeconds();
            const min = time.getMinutes();
            const hr = time.getHours();
            const day = time.getDate();

            const secAngle = sec * 6 % 360;
            const minAngle = (min + sec / 60) * 6 % 360;
            const hrAngle = (hr + min / 60 + sec / 3600) * 30 % 360;

            rotateClockHands(secAngle, minAngle, hrAngle, day);
        }

        function rotateClockHands(secAngle, minAngle, hrAngle, day) {
            const second: HTMLDivElement = document.querySelector("#Rolex .second");
            const minute: HTMLDivElement = document.querySelector("#Rolex .minute");
            const hour: HTMLDivElement = document.querySelector("#Rolex .hour");
            const dateValue: HTMLDivElement = document.querySelector("#Rolex .date-value");
            second.style.transform = `translate(-50%, -50%) rotate(${secAngle}deg)`;
            minute.style.transform = `translate(-50%, -50%) rotate(${minAngle}deg)`;
            hour.style.transform = `translate(-50%, -50%) rotate(${hrAngle}deg)`;
            dateValue.innerText = day.toString();
        }
    });

    onCleanup(() => {
        clearInterval(animation);
    })

    return (
        <>
            <ProjectHeader/>
            <div id="Rolex">
                <link href="https://fonts.googleapis.com" rel="preconnect"/>
                <link crossOrigin="anonymous" href="https://fonts.gstatic.com" rel="preconnect"/>
                <link
                    href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond&family=EB+Garamond&display=swap"
                    rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css2?family=Source+Sans+3&display=swap"
                      rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css2?family=Mallanna&display=swap"
                      rel="stylesheet"/>
                <div class="watch-container">
                    <div class="crown">
                        <div class="c"></div>
                        <div class="d">
                            <div class="step">
                                <div class="s1"></div>
                                <div class="s2"></div>
                            </div>
                            <div class="step">
                                <div class="s1"></div>
                                <div class="s2"></div>
                            </div>
                            <div class="step">
                                <div class="s1"></div>
                                <div class="s2"></div>
                            </div>
                            <div class="step">
                                <div class="s1"></div>
                                <div class="s2"></div>
                            </div>
                        </div>
                        <div class="e"></div>
                    </div>
                    <div class="rim r3"></div>
                    <div class="rim r2"></div>
                    <div class="rim r1"></div>
                    <div class="dial">
                        <div class="indices">
                            <div class="index">
                                <div class="mark"></div>
                                <div class="mark"></div>
                            </div>
                            <div class="index">
                                <div class="mark"></div>
                                <div class="mark"></div>
                            </div>
                            <div class="index">
                                <div class="mark"></div>
                                <div class="mark"></div>
                            </div>
                            <div class="index">
                                <div class="mark"></div>
                                <div class="mark"></div>
                            </div>
                            <div class="index">
                                <div class="mark"></div>
                                <div class="mark"></div>
                            </div>
                            <div class="index">
                                <div class="mark"></div>
                                <div class="mark"></div>
                            </div>
                            <div class="index">
                                <div class="mark"></div>
                                <div class="mark"></div>
                            </div>
                            <div class="index">
                                <div class="mark"></div>
                                <div class="mark"></div>
                            </div>
                            <div class="index">
                                <div class="mark"></div>
                                <div class="mark"></div>
                            </div>
                            <div class="index">
                                <div class="mark"></div>
                                <div class="mark"></div>
                            </div>
                            <div class="index">
                                <div class="mark"></div>
                                <div class="mark"></div>
                            </div>
                            <div class="index">
                                <div class="mark"></div>
                                <div class="mark"></div>
                            </div>
                            <div class="index">
                                <div class="mark"></div>
                                <div class="mark"></div>
                            </div>
                            <div class="index">
                                <div class="mark"></div>
                                <div class="mark"></div>
                            </div>
                            <div class="index">
                                <div class="mark"></div>
                                <div class="mark"></div>
                            </div>
                            <div class="index">
                                <div class="mark"></div>
                                <div class="mark"></div>
                            </div>
                            <div class="index">
                                <div class="mark"></div>
                                <div class="mark"></div>
                            </div>
                            <div class="index">
                                <div class="mark"></div>
                                <div class="mark"></div>
                            </div>
                            <div class="index">
                                <div class="mark"></div>
                                <div class="mark"></div>
                            </div>
                            <div class="index">
                                <div class="mark"></div>
                                <div class="mark"></div>
                            </div>
                            <div class="index">
                                <div class="mark"></div>
                                <div class="mark"></div>
                            </div>
                            <div class="index">
                                <div class="mark"></div>
                                <div class="mark"></div>
                            </div>
                            <div class="index">
                                <div class="mark"></div>
                                <div class="mark"></div>
                            </div>
                            <div class="index">
                                <div class="mark"></div>
                                <div class="mark"></div>
                            </div>
                            <div class="index">
                                <div class="mark"></div>
                                <div class="mark"></div>
                            </div>
                            <div class="index">
                                <div class="mark"></div>
                                <div class="mark"></div>
                            </div>
                            <div class="index">
                                <div class="mark"></div>
                                <div class="mark"></div>
                            </div>
                            <div class="index">
                                <div class="mark"></div>
                                <div class="mark"></div>
                            </div>
                            <div class="index">
                                <div class="mark"></div>
                                <div class="mark"></div>
                            </div>
                        </div>
                        <div class="indicators">
                            <div class="indicator">
                                <div class="mark">
                                    <div class="point"></div>
                                    <img alt="rolex-logo" class="rolex-logo"
                                         src="https://parspng.com/wp-content/uploads/2022/10/rolexpng.parspng.com-2-150x150.png"/>
                                </div>
                                <div class="mark">
                                    <div class="legend">
                                        <div class="digit"></div>
                                        <div class="digit"></div>
                                    </div>
                                    <div class="point"></div>
                                </div>
                            </div>
                            <div class="indicator">
                                <div class="mark">
                                    <div class="point"></div>
                                    <div class="legend">
                                        <div class="digit"></div>
                                    </div>
                                </div>
                                <div class="mark">
                                    <div class="legend">
                                        <div class="digit"></div>
                                    </div>
                                    <div class="point"></div>
                                </div>
                            </div>
                            <div class="indicator">
                                <div class="mark">
                                    <div class="point"></div>
                                    <div class="legend">
                                        <div class="digit"></div>
                                    </div>
                                </div>
                                <div class="mark">
                                    <div class="legend">
                                        <div class="digit"></div>
                                    </div>
                                    <div class="point"></div>
                                </div>
                            </div>
                            <div class="indicator">
                                <div class="mark">
                                    <div class="point"></div>
                                    <div class="legend">
                                        <div class="digit"></div>
                                        <div class="digit"></div>
                                    </div>
                                </div>
                                <div class="mark">
                                    <div class="legend">
                                        <div class="digit"></div>
                                        <div class="digit"></div>
                                    </div>
                                    <div class="point"></div>
                                </div>
                            </div>
                            <div class="indicator">
                                <div class="mark">
                                    <div class="point"></div>
                                    <div class="legend">
                                        <div class="digit"></div>
                                    </div>
                                </div>
                                <div class="mark">
                                    <div class="legend">
                                        <div class="digit"></div>
                                    </div>
                                    <div class="point"></div>
                                </div>
                            </div>
                            <div class="indicator">
                                <div class="mark">
                                    <div class="point"></div>
                                    <div class="legend">
                                        <div class="digit"></div>
                                    </div>
                                </div>
                                <div class="mark">
                                    <div class="legend">
                                        <div class="digit"></div>
                                    </div>
                                    <div class="point"></div>
                                </div>
                            </div>
                        </div>
                        <div class="rolex">
                            <div class="text text1">
                                <p class="brand">ROLEX</p>
                                <p class="t1">OYSTER PERPETUAL</p>
                            </div>
                            <div class="text text2">
                                <p>SUPERLATIVE CHRONOMETER</p>
                                <p>OFFICIALLY CERTIFIED</p>
                            </div>
                        </div>
                        <div class="date">
                            <div class="date-value"></div>
                        </div>
                        <div class="clock">
                            <div class="hour">
                                <div class="container"></div>
                                <div class="container"></div>
                                <div class="cover"></div>
                            </div>
                            <div class="minute">
                                <div class="container"></div>
                                <div class="container"></div>
                                <div class="cover"></div>
                            </div>
                            <div class="circle"></div>
                            <div class="second">
                                <div class="container"></div>
                            </div>
                            <div class="c2"></div>
                            <div class="point"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
