
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

export default function(elements){

    if ( elements ) {
      if ( Array.isArray(elements) || elements instanceof NodeList || elements instanceof HTMLCollection ) {
        return elements[ 0 ].getBoundingClientRect()[ "width" ];
      }
      else {

        return elements.getBoundingClientRect()[ "width" ];
      }
    }
    else {
      return undefined;
    }


}