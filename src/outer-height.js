/*
each(['Width','width'],v => {

  var lower = v.toLowerCase();

  fn[lower] = function(){ return this[0].getBoundingClientRect()[lower]; };

  fn['inner'+v] = function(){ return this[0]['client'+v]; };

  fn['outer'+v] = function(margins) {
    return this[0]['offset'+v] + ( margins ?
      compute(this, 'margin'+( v === 'Width' ? 'Left' : 'Top' )) +
      compute(this, 'margin'+( v === 'Width' ? 'Right' : 'Bottom' )) :
      0 );
  };

});
*/



function compute(element, property) {
  return parseInt(window.getComputedStyle(element[0], null)[property], 10) || 0;
}

/**
 * @module ember-simple-dom-tools
 * @function outerHeight
 * @kind function
 * @param {Array} elements An element or an array of elements to get outerHeight from
 * @param {boolean} [margins] If true include margins in the return value.
 * @returns {Array}
 */
export default function(elements,margins){

  if ( elements ) {
    if ( Array.isArray(elements) || elements instanceof NodeList || elements instanceof HTMLCollection ) {
      return elements[0]['offsetHeight'] + ( margins ?    compute(elements[0], 'marginTop') + compute(elements[0], 'marginBottom') :        0 );
    }
    else {
      return elements['offsetHeight'] + ( margins ?    compute(elements, 'marginTop') + compute(elements, 'marginBottom') :        0 );
    }
  }
  else {
    return undefined;
  }


}