import { createElement, addEventListener, removeEventListener } from "../utils.js";
/**
 * Creates and configures a drum pad element with associated audio.
 * 
 * @param {string} label - Display label for the drum pad.
 * @param {string} src - Audio source URL for the drum pad sound.
 * @param {string} key - Keyboard key associated with the drum pad.
 * @param {Audio} audio - The audio element for this pad.
 * @returns {HTMLElement} The created drum pad element.
 */
export default function drumPad(label, src, key, audio) {

    // new createElement implementation tests:
    const fragment = document.createDocumentFragment(); 

/* 
    jsx(fragment, <div className="drum-pads" onClick="eventCallBack">abc</div>)
     */

    const padElement = createElement("div", document.querySelector(".drum-pads"));
    padElement.className = "drum-pad";
    const buttonElement = createElement("button", padElement);
    buttonElement.className = "drum-button";

    buttonElement.setAttribute("data-key", key);

    const keyElement = createElement("span", buttonElement, key);
    keyElement.className = "drum-key";
    const labelElement = createElement("span", buttonElement, label);
    labelElement.className = "drum-name";

    //const audioElement = new Audio(src);

    
    addEventListener(padElement, "pointerdown", () => {
        audio.play();
        buttonElement.classList.add("drum-button-down");
    });

    padElement.addEventListener("pointerup", () => {
        audio.stop();
        buttonElement.classList.remove("drum-button-down");
    });

    return padElement;
}