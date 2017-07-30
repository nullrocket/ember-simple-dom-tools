
function compute(element, property) {
  return parseInt(window.getComputedStyle(element[0], null)[property], 10) || 0;
}

/**
 * @module ember-simple-dom-tools
 * @function outerWidth
 * @kind function
 * @param {Array} elements An element or an array of elements to get outerWidth from
 * @param {boolean} [margins] If true include margins in the return value.
 * @returns {Array}
 */
export default function(elements,margins){

    if ( elements ) {
      if ( Array.isArray(elements) || elements instanceof NodeList || elements instanceof HTMLCollection ) {
        return elements[0]['offsetWidth'] + ( margins ?    compute(elements[0], 'marginLeft') + compute(elements[0], 'marginRight') :        0 );
      }
      else {

        return elements['offsetWidth'] + ( margins ?    compute(elements, 'marginLeft') + compute(elements, 'marginRight') :        0 );
      }
    }
    else {
      return undefined;
    }


}