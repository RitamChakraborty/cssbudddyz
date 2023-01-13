import {createSignal} from "solid-js";

const [currentCardIndex, setCurrentCardIndex] = createSignal<number>(0);

export default function ProjectCardService() {
    function incrementCurrentCardIndex() {
        setCurrentCardIndex((value) => value + 1);
    }

    function decrementCurrentCardIndex() {
        setCurrentCardIndex((value) => value - 1);
    }

    return {
        currentCardIndex: currentCardIndex,
        setCurrentCardIndex: setCurrentCardIndex,
        incrementCurrentCardIndex: incrementCurrentCardIndex,
        decrementCurrentCardIndex: decrementCurrentCardIndex
    };
}
