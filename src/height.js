/**
 * @module ember-simple-dom-tools
 * @function height
 *
 * @summary
 * Get or set height for DomElements passed into **elements**.
 * @description
 *
 *
 * ```html
 * //index.html
 * ...
 * <div class=".content" style="height:500px" >
 *   <p class=".intro" style="height:500px" > </p>
 *   <p class=".intro" style="height:500px" ></p>
 *   <p class=".intro" style="height:500px" ></p>
 * </div>
 * ...
 * ```
 *
 * ```javascript
 * //height.js
 * import {height,select} from 'ember-simple-dom-tools';
 * let contentDom = select('.content');
 *
 * // height called with single element and no options will return a single value.
 * height(contentDom); // 500
 *
 * // height called with a single element and the option DIMENSION_OPTIONS.RETURN_ARRAY
 * // will always return an array of values.
 * height(contentDom,DIMENSION_OPTIONS.RETURN_ARRAY); // [500]
 *
 * // height called with an array of elements will return the height of the
 * // first element.
 * let paragraphDom = select('p');
 * height(paragraphDom); // 500
 *
 * // height called with an array of elements  and the option
 * // DIMENSION_OPTIONS.RETURN ARRAY will return an array of all the passed elements heights.
 * height(paragraphDom,DIMENSION_OPTIONS.RETURN_ARRAY); // [500,500,500]
 *
 *
 * ```
 *
 * @param {DomElement|NodeList|HTMLCollection|Array} elements A DomElement or an array of DomElements.
 * @param {string|integer} [toHeight]  The toHeight param can be either a number or a string, if you wish to specify units you must pass a string.
 * @param {...DIMENSION_OPTIONS} [DIMENSION_OPTIONS] If set to DIMENSION_OPTIONS.SET_ALL then all passed elements will have their heights set to value if a value is passed.
 * @returns {Number|Array<Number>|undefined} Either a length or an array of lengths. Values are in px units. If an element is not found an empty array or undefined will be returned depending on the options passed.
 */
export  {height,DIMENSION_OPTIONS} from './get-height-or-width';


