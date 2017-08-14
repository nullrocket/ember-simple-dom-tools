/**
 * @module ember-simple-dom-tools
 * @function width
 *
 * @summary
 * Get or set width for DomElements passed into **elements**.
 * @description
 *
 *
 * ```html
 * //index.html
 * ...
 * <div class="content" style="width:500px" >
 *   <p class="intro" style="width:500px" > </p>
 *   <p class="intro" style="width:500px" ></p>
 *   <p class="intro" style="width:500px" ></p>
 * </div>
 * ...
 * ```
 *
 * ```javascript
 * //width.js
 * import {width,select,DIMENSION_OPTIONS} from 'ember-simple-dom-tools';
 * let contentDom = select('.content');
 *
 * // width called with single element and no options will return a single value.
 * width(contentDom); // 500
 *
 * // width called with a single element and the option DIMENSION_OPTIONS.RETURN_ARRAY
 * // will always return an array of values.
 * width(contentDom,DIMENSION_OPTIONS.RETURN_ARRAY); // [500]
 *
 * // width called with an array of elements will return the width of the
 * // first element.
 * let paragraphDom = select('p');
 * width(paragraphDom); // 500
 *
 * // width called with an array of elements  and the option
 * // DIMENSION_OPTIONS.RETURN ARRAY will return an array of all the passed elements widths.
 * width(paragraphDom,DIMENSION_OPTIONS.RETURN_ARRAY); // [500,500,500]
 *
 * // width called with single element, a value, and no options will set the
 * // elements width and return the newly set width.
 * width(contentDom,600); // 600
 *
 * // width called with single element, a value, and DIMENSION_OPTIONS.RETURN_ARRAY
 * // will set the elements width and return the newly set width as an array.
 * width(contentDom,700,DIMENSION_OPTIONS.RETURN_ARRAY); // [700]
 *
 * // width called with an array of elements and a value will set the first elements
 * // width and return the newly set width.
 * width(paragraphDomDom,700); // 700
 *
 * // width called with an array of elements, a value and DIMENSION_OPTIONS.RETURN_ARRAY
 * // will set all elements width and return an array of widths.
 * width(paragraphDomDom,800,DIMENSION_OPTIONS.RETURN_ARRAY); // [800,800,800]
 *
 *
 * ```
 *
 * @param {DomElement|NodeList|HTMLCollection|Array} elements A DomElement or an array of DomElements.
 * @param {string|integer} [toWidth]  The toWidth param can be either a number or a string, if you wish to specify units you must pass a string.
 * @param {...DIMENSION_OPTIONS} [DIMENSION_OPTIONS]
 * @returns {Number|Array<Number>|undefined} Either a length or an array of lengths depending on the options passed in, values are in px units. Returns undefined if an element is not found.
 */
export  {width,DIMENSION_OPTIONS} from './get-height-or-width'

