import getHeightOrWidth from './get-height-or-width'
/**
 * @module ember-simple-dom-tools
 * @function height
 * @param {DomElement|NodeList|HTMLCollection|Array} elements
 * @param {string} [toHeight]
 * @returns {Number|undefined}
 */
export default function height(elements,toHeight){
  let heightx = toHeight ? toHeight :undefined;
    if ( elements ) {
      if ( Array.isArray(elements) || elements instanceof NodeList || elements instanceof HTMLCollection ) {
        let heights = [];
        for(var i = 0;i < elements.length;i++) {
          heights.push(height(elements[ i ]),heightx)
        }
        return heights;
        //return width ?  elements[ 0 ].style.width = width :elements[ 0 ].getBoundingClientRect()[ "width" ];
      }
      else {
        return heightx ?  elements.style.height = heightx :getHeightOrWidth(elements, "height" );
        //return height ?  elements.style.height = height : elements.getBoundingClientRect()[ "height" ];
      }
    }


}