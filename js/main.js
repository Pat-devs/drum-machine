/**
 * Initializes and appends the drum machine to the page.
 */
import drumMachine from "./components/drumMachine.js";

const rootElement = document.getElementById("root");
const drumMachineElement = drumMachine();
rootElement.appendChild(drumMachineElement);
