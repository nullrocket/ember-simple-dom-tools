import nonnative_slice from './__slice';

/**
 * @module ember-simple-dom-tools
 * @function append
 *
 * @summary
 * Append elements to a DomElement.
 *
 * @description
 * Append elements to a DomElement.
 *
 * @param {Array} elements An element or an array of elements to append
 * @param {DomElement} destination A DOM element to append elements to.
 * @returns {Array|undefined}
 */
export default function ( elements, destination ) {
  let fragment = document.createDocumentFragment();
  if ( elements ) {

    if ( Array.isArray(elements) || elements instanceof NodeList || elements instanceof HTMLCollection ) {
      while ( elements.length ) {
        fragment.append(elements[ 0 ]);
      }
      let children = nonnative_slice(fragment.childNodes);
      destination.appendChild(fragment);
      return children;
    }
    else {

      fragment.append(elements);
      let children = nonnative_slice(fragment.childNodes);
      destination.appendChild(fragment);
      return children;
    }
  }

}