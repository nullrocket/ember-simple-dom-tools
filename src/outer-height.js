


/*
function compute(element, property) {
  return parseInt(window.getComputedStyle(element[0], null)[property], 10) || 0;
}
*/
/**
 * @module ember-simple-dom-tools
 * @function outerHeight
 * @kind function
 * @param {Array} elements An element or an array of elements to get outerHeight from
 * @param {boolean} [margins] If true include margins in the return value.
 * @returns {Array}
 */
/*
export default function(elements,margins){

  if ( elements ) {
    if ( Array.isArray(elements) || elements instanceof NodeList || elements instanceof HTMLCollection ) {
      return elements[0]['offsetHeight'] + ( margins ?    compute(elements[0], 'marginTop') + compute(elements[0], 'marginBottom') :        0 );
    }
    else {
      return elements['offsetHeight'] + ( margins ?    compute(elements, 'marginTop') + compute(elements, 'marginBottom') :        0 );
    }
  }

}
*/
export {outerHeight} from './get-height-or-width';