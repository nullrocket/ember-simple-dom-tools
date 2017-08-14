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
 * <div class="content" style="height:500px" >
 *   <p class="intro" style="height:500px" > </p>
 *   <p class="intro" style="height:500px" ></p>
 *   <p class="intro" style="height:500px" ></p>
 * </div>
 * ...
 * ```
 *
 * ```javascript
 * //height.js
 * import {height,select,DIMENSION_OPTIONS} from 'ember-simple-dom-tools';
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
 * // height called with single element, a value, and no options will set the
 * // elements height and return the newly set height.
 * height(contentDom,600); // 600
 *
 * // height called with single element, a value, and DIMENSION_OPTIONS.RETURN_ARRAY
 * // will set the elements height and return the newly set height as an array.
 * height(contentDom,700,DIMENSION_OPTIONS.RETURN_ARRAY); // [700]
 *
 * // height called with an array of elements and a value will set the first elements
 * // height and return the newly set height.
 * height(paragraphDomDom,700); // 700
 *
 * // height called with an array of elements, a value and DIMENSION_OPTIONS.RETURN_ARRAY
 * // will set all elements height and return an array of heights.
 * height(paragraphDomDom,800,DIMENSION_OPTIONS.RETURN_ARRAY); // [800,800,800]
 *
 *
 * ```
 *
 * @param {DomElement|NodeList|HTMLCollection|Array} elements A DomElement or an array of DomElements.
 * @param {string|integer} [toHeight]  The toHeight param can be either a number or a string, if you wish to specify units you must pass a string.
 * @param {...DIMENSION_OPTIONS} [DIMENSION_OPTIONS]
 * @returns {Number|Array<Number>|undefined} Either a length or an array of lengths depending on the options passed in, values are in px units. Returns undefined if an element is not found.
 */
export  {height,DIMENSION_OPTIONS} from './get-height-or-width';


