function compute(element, property) {
  return parseInt(window.getComputedStyle(element[0], null)[property], 10) || 0;
}
/*
each(['Width','Height'],v => {

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
/**
 * @module ember-simple-dom-tools
 * @function height
 * @param {sginr} elements
 * @param {string} [toHeight]
 * @returns {Number|undefined}
 */
export default function(elements,toHeight){
  if(toHeight)
  {
    if ( elements ) {
      if ( Array.isArray(elements) || elements instanceof NodeList || elements instanceof HTMLCollection ) {
        console.log('here')
        console.log('lenght', elements.length);
        return elements[ 0 ].style.height = toHeight;
      }
      else {
        console.log('there')
        console.log(elements);
        return elements.style.height = toHeight;
      }
    }
    else {
      return undefined;
    }
  }
  else {
    if ( elements ) {
      if ( Array.isArray(elements) || elements instanceof NodeList || elements instanceof HTMLCollection ) {
        console.log('here')
        console.log('lenght', elements.length);
        return elements[ 0 ].getBoundingClientRect()[ "height" ];
      }
      else {
        console.log('there')
        console.log(elements);
        return elements.getBoundingClientRect()[ "height" ];
      }
    }
    else {
      return undefined;
    }
  }


}