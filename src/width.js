import getHeightOrWidth from './get-height-or-width'
/**
 * @module ember-simple-dom-tools
 * @function width
 * @description
 *
 * https://github.com/jquery/jquery/issues/3193
 * @param {Element|Array<Element>|NodeList|HTMLCollection} elements Elements to get the width of.
 * @param {string} [toWidth]  If supplied will set the width of the passed elements.
 * @returns {Number|Array<Number>|undefined}
 */
export default function width(elements,toWidth){

    if ( elements ) {
      if ( Array.isArray(elements) || elements instanceof NodeList || elements instanceof HTMLCollection ) {
        let widths = [];
        for(var i = 0;i < elements.length;i++) {
          widths.push(width(elements[ i ]),toWidth)
        }
        return widths[0];
        //return width ?  elements[ 0 ].style.width = width :elements[ 0 ].getBoundingClientRect()[ "width" ];
      }
      else {

        return toWidth ?  elements.style.width = toWidth :getHeightOrWidth(elements, "width" );
       //return widthx ?  elements.style.width = widthx :window.getComputedStyle(elements)[ "width" ];
       // return widthx ?  elements.style.width = widthx : elements.getBoundingClientRect()[ "width" ];
      }
    }
}


