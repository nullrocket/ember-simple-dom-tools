import getHeightOrWidth from './get-height-or-width'

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
export default function height(elements,toHeight){

 // let heightx = toHeight ? toHeight :undefined;
    if ( elements ) {

      if ( Array.isArray(elements) || elements instanceof NodeList || elements instanceof HTMLCollection ) {

        let heights = [];
        for(var i = 0;i < elements.length;i++) {
          heights.push(height(elements[ i ],toHeight))
        }
        return heights[0];
        //return width ?  elements[ 0 ].style.width = width :elements[ 0 ].getBoundingClientRect()[ "width" ];
      }
      else {


        return toHeight ?  parseFloat(elements.style.height = toHeight) : getHeightOrWidth(elements, "height" );
    //   return toHeight ?  parseFloat(elements.style.height = toHeight) : elements.getBoundingClientRect()[ "height" ];
      }
    }


}