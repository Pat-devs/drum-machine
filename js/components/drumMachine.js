import { createElement } from "../utils.js";
import sounds from "../data/sounds.js";
import drumPad from "./drumPad.js";

/**
 * Creates and returns the main drum machine element. 
 * 
 * @returns {HTMLElement} The drum machine element.
 */
export default function drumMachine() {
    
    const machineElement = createElement("div");
    machineElement.className = "drum-machine";
     
    const titleElement = createElement("h1", machineElement, "DRUM");
    titleElement.className = "title";

    const subtitleElement = createElement("span", titleElement, "MACHINE");
    subtitleElement.className = "subtitle";

    const drumPads = createElement("div", machineElement);
    drumPads.className = "drum-pads";

    const audioElements = {};


    // Iterate through each sound in the sounds array
    sounds.forEach((sound) => {
        // Log the current sound to the console
        console.log(sound)

        // Create a new audio element for the current sound
        const audioElement = new Audio(sound.src)

        // Add a stop method to the audio element
        audioElement.stop = () => {
            // Pause the audio element
            audioElement.pause()

            // Reset the audio element's current time to 0
            audioElement.currentTime = 0
        }

        // Add the audio element to the audioElements object
        audioElements[sound.key] = audioElement

        // Create a new drum pad element for the current sound
        const drumPadElement = drumPad(sound.label, sound.src, sound.key, audioElement);

        // Append the drum pad element to the drum pads container
        drumPads.appendChild(drumPadElement);
    });


    document.addEventListener("keydown", (event) => {
        const key = event.key;

        if (audioElements[key]) {
            audioElements[key].play();
        }
        const drumPadElement = document.querySelector(`[data-key="${key}"]`);
        if (drumPadElement) {
            drumPadElement.classList.add("drum-button-down");
        }
    });
    document.addEventListener("keyup", (event) => {
        const key = event.key;
        if (audioElements[key]) {
            audioElements[key].stop();
        }
        const drumPadElement = document.querySelector(`[data-key="${key}"]`);
        if (drumPadElement) {
            drumPadElement.classList.remove("drum-button-down");
        }
    });


    return machineElement;
}