/**
 * @module ember-simple-dom-tools
 * @function width
 * @param {Element|Array<Element>|NodeList|HTMLCollection} elements Elements to get the width of.
 * @param {string} [toWidth]  If supplied will set the width of the passed elements.
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
}