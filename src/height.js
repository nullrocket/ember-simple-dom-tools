import getWidthOrHeight from './get-height-or-width'

/**
 * @module ember-simple-dom-tools
 * @function height
 *
 * @summary
 * Get the current height for each elements passed into **elements** or set the height of each element passed into **elements**
 * @description
 * ```javascript
 * import {height,select} from 'ember-simple-dom-tools';
 * let contentDom = select('.content');
 * height(contentDom); // 500px
 *
 * height(contentDom,'200px'); // 200px
 *
 * ```
 *
 * @param {DomElement|NodeList|HTMLCollection|Array} elements
 * @param {string|integer} [toHeight]  The toHeight param can be either a number or a string.
 * @returns {Number|Array<Number>|undefined} return is in px
 */
let height = getWidthOrHeight("height");

export default height;
