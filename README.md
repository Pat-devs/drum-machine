# Drum Machine Project

## Description

This Drum Machine project is a basic, front-end web application designed to provide a simple and customizable live drumming experience. It's built using HTML, CSS, and JavaScript with a focus on modular design and accessibility. 

## Core Features

* **Drum Pads:** Interactive drum pads that trigger different drum sounds.
* **Keyboard Interaction:** Trigger sounds by pressing the corresponding keys on the keyboard.
* **Visual Feedback:** Drum pads visually indicate when active.
* **Customization:** The sound library and key mappings can be easily modified.

## Project Architecture

The project follows a component-based structure:

* **`index.html`:** The main entry point, sets up the structure and links resources.
* **`css/style.css`:** Defines the visual appearance and layout.
* **`js/main.js`:** Initializes the application and adds the drum machine component to the page.
* **`js/utils.js`:** Utility functions for creating DOM elements.
* **`js/data/sounds.js`:** Data structure holding sound labels, sources, and key mappings.
* **`js/components/drumMachine.js`:** Creates the main drum machine container and logic.
* **`js/components/drumPad.js`:** Creates individual drum pad elements with event handlers.

## Usage

1. **Keyboard:**
   * Press the keys on the keyboard corresponding to each drum sound (Q, W, E, A, S, D, Z, X, C).

2. **Mouse/Touch:**
   * Click or tap on the drum pads directly.

### Customization

The `js/data/sounds.js` file contains an array of objects, each defining a drum sound:

```javascript
{
    label: "Clap",
    src: "./media/Acoustic-Clap-d4jp cl f1.ogg",
    key: "q"
}
``````