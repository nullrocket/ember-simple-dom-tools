
/**
 * @module ember-simple-dom-tools
 * @function empty
 *
 * @param {Element|Array<Element>|NodeList|HTMLCollection} elements Elements to remove children from.
 * @returns {Array<Elements|null>}
 */
export default function empty(elements){

  if ( elements ) {
    if ( Array.isArray(elements) || elements instanceof NodeList || elements instanceof HTMLCollection ) {
      let removedElements = [];
      for(var i = 0;i < elements.length;i++) {
        removedElements.push(empty(elements[ i ]))
      }
      return removedElements;
      //return width ?  elements[ 0 ].style.width = width :elements[ 0 ].getBoundingClientRect()[ "width" ];
    }
    else {
     //   console.log('elements',elements);
         elements.innerHTML = '';

   //   console.log('elements',elements.innerHTML);
    }
  }
}