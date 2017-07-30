/**
 * @module ember-simple-dom-tools
 * @function width
 * @param {DomElement|NodeList|HTMLCollection|Array} elements
 * @param {string} [toWidth]
 * @returns {Number}
 */
export default function(elements,toWidth){
    if ( elements ) {
      if ( Array.isArray(elements) || elements instanceof NodeList || elements instanceof HTMLCollection ) {

        return toWidth ?  elements[ 0 ].style.width = toWidth :elements[ 0 ].getBoundingClientRect()[ "width" ];
      }
      else {
        return toWidth ?  elements.style.width = toWidth : elements.getBoundingClientRect()[ "width" ];
      }
    }
    else {
      return undefined;
    }



}