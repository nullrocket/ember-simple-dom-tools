export  {height,DIMENSION_OPTIONS} from './get-height-or-width'

/**
 * @module ember-simple-dom-tools
 * @function height
 *
 * @summary
 * Get the current height for each elements passed into **elements** or set the height of each element passed into **elements**
 * @description
 *
 * When called with a single **elements** argument **height** will return a height as a number, this number is in **px** units.
 * ```html
 * <div class=".content" style="height:500px" ></div>
 * ```
 * ```javascript
 * import {height,select} from 'ember-simple-dom-tools';
 * let contentDom = select('.content');
 * height(contentDom); // 500px
 * ```
 *
 *
 * When called with multiple **elements** argument **height** will return an Array<number> of height in **px** units.
 * ```html
 * <p class=".intro" style="height:500px" >
 * </p><p class=".intro" style="height:500px" ></p>
 * <p class=".intro" style="height:500px" ></p>
 * ```
 * ```javascript
 * import {height,select} from 'ember-simple-dom-tools';
 * let paragraphDom = select('p');
 * height(paragraphDom); // 500px
 * ```
 *
 * @param {DomElement|NodeList|HTMLCollection|Array} elements A DomElement or an array of DomElements.
 * @param {string|integer} [toHeight]  The toHeight param can be either a number or a string, if you wish to specify units you must pass a string.
 * @returns {Number|Array<Number>|undefined} Either a length in px or an array of lengths.
 */

//export default height;

