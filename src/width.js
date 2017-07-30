/**
 * @module ember-simple-dom-tools
 * @function width
 * @param {DomElement|NodeList|HTMLCollection|Array} elements
 * @param {string} [toWidth]
 * @returns {Number|undefined}
 */
export default function(elements,toWidth){
  let width = toWidth ? toWidth : undefined;
    if ( elements ) {
      if ( Array.isArray(elements) || elements instanceof NodeList || elements instanceof HTMLCollection ) {
        return width ?  elements[ 0 ].style.width = width :elements[ 0 ].getBoundingClientRect()[ "width" ];
      }
      else {
        return width ?  elements.style.width = width : elements.getBoundingClientRect()[ "width" ];
      }
    }
    else {
      return undefined;
    }



}