/**
 * @module ember-simple-dom-tools
 * @function remove
 * @param {Element|Array<Element>|NodeList|HTMLCollection} elements Elements to remove.
 * @returns {Array<Elements|null>}
 */
export default function remove(elements){

  if ( elements ) {
    if ( Array.isArray(elements) || elements instanceof NodeList || elements instanceof HTMLCollection ) {
      let removedElements = [];
      for(var i = 0;i < elements.length;i++) {
        removedElements.push(remove(elements[ i ]))
      }
      return removedElements;
      //return width ?  elements[ 0 ].style.width = width :elements[ 0 ].getBoundingClientRect()[ "width" ];
    }
    else {
      return elements.parentNode.removeChild(elements);
    }
  }
}