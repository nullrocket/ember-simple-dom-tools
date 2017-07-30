
/**
 * @module ember-simple-dom-tools
 * @function height
 * @param {DomElement|NodeList|HTMLCollection|Array} elements
 * @param {string} [toHeight]
 * @returns {Number|undefined}
 */
export default function(elements,toHeight){
  let height = toHeight ? toHeight :undefined;
    if ( elements ) {
      if ( Array.isArray(elements) || elements instanceof NodeList || elements instanceof HTMLCollection ) {
        return height ?  elements[ 0 ].style.height = height :elements[ 0 ].getBoundingClientRect()[ "height" ];
      }
      else {
        return height ?  elements.style.height = height : elements.getBoundingClientRect()[ "height" ];
      }
    }
    else {
      return undefined;
    }


}