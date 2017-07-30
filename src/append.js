

/**
 * @module ember-simple-dom-tools
 * @function append
 * @kind function
 * @param {Array} elements An element or an array of elements to append
 * @param {DomElement} destination A DOM element to append elements to.
 * @returns {Array|undefined}
 */
export default function(elements, destination){
  let fragment = document.createDocumentFragment();
  if(elements) {

    if ( Array.isArray(elements) || elements instanceof NodeList || elements instanceof HTMLCollection ) {
      while ( elements.length ) {
        fragment.append(elements[ 0 ]);
      }
      let children = [].slice.call(fragment.childNodes, 0);
      destination.appendChild(fragment);
      return children;
    }
    else {

        fragment.append(elements);
      let children = [].slice.call(fragment.childNodes, 0);
      destination.appendChild(fragment);
      return children;
    }
  }

}