const Dom = {};


/**
 * Adds a class to an element
 * @private
 * @param {Element} element
 * @param {string} className
 */
const addClass = (element, className) => {
    element.classList.add(className);
};


/**
 * Adds a class to multiple elements based on selector
 * @public
 * @param {string} selector
 * @param {string} className
 */
Dom.addClasses = (selector, className) => {
    const nodes = document.querySelectorAll(selector);
    nodes.forEach((node) => {
        addClass(node, className);
    });
};


export default Dom;
