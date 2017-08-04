import getWidthOrHeight from './get-height-or-width'

/**
 * @module ember-simple-dom-tools
 * @function height
 *
 * @sometext
 * Get the current computed height for each elements passed into **elements** or set the height of each element passed into **elements**
 *
 *
 * ```javascript
 * import {height,select} from 'ember-simple-dom-tools';
 * let contentDom = select('.content');
 * height(contentDom,'500px');
 * ```
 *
 * @param {DomElement|NodeList|HTMLCollection|Array} elements
 * @param {string} [toHeight]
 * @returns {Number|undefined}
 */
let height = getWidthOrHeight("height");

export default height;
