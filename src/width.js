import getWidthOrHeight from './get-height-or-width'
/**
 * @module ember-simple-dom-tools
 * @function width
 * @description
 *
 * https://github.com/jquery/jquery/issues/3193
 * @param {Element|Array<Element>|NodeList|HTMLCollection} elements Elements to get the width of.
 * @param {string} [toWidth]  If supplied will set the width of the passed elements.
 * @returns {Number|Array<Number>|undefined}
 */
let width = getWidthOrHeight("width");

export default width;

