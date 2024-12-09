/**
 * Creates and configures a new DOM element.
 * 
 * @param {string} tagName - The type of element to create.
 * @param {HTMLElement} [parentElement] - Optional parent to append the element to.
 * @param {string} [textContent=""] - Initial text content of the element.
 * @returns {HTMLElement} The created element.
 */
export const createElement = (tagName, parentElement, textContent = "") => {
    const element = document.createElement(tagName);
    element.textContent = textContent;
    parentElement?.appendChild(element)
    return element;
}

/**
 * Adds an event listener to an element.
 *
 * @param {HTMLElement} element - The element to attach the listener to.
 * @param {string} eventType - The type of event to listen for.
 * @param {function} listener - The function to execute when the event occurs.
 * @param {object} [options] - Optional options for the event listener.
 */
export const addEventListener = (element, eventType, listener, options) => {
    element.addEventListener(eventType, listener, options);
};
/**
 * Removes an event listener from an element.
 *
 * @param {HTMLElement} element - The element to remove the listener from.
 * @param {string} eventType - The type of event to remove the listener for.
 * @param {function} listener - The listener function to remove.
 * @param {object} [options] - Optional options for the event listener.
 */
export const removeEventListener = (element, eventType, listener, options) => {
    element.removeEventListener(eventType, listener, options);
};

