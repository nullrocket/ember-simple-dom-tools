
function compute(element, property) {
  return parseInt(window.getComputedStyle(element[0], null)[property], 10) || 0;
}
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