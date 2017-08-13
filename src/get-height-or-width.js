import {getStyles, curCSS, rnumnonpx, boxSizingReliableVal, boxModelAdjustment, css} from './css';

export const DIMENSION_OPTIONS = {
  SET_ALL: Symbol(),
  RETURN_ARRAY: Symbol()

}


/*

https://github.com/jquery/jquery/pull/3561
 */
function _getWidthOrHeight( elem, dimension, extra ) {
  if(!elem) {
    return undefined;
  }
  // Start with computed style
  var styles = getStyles(elem);
  var val = curCSS(elem, dimension, styles);
  var isBorderBox = css(elem, "boxSizing", false, styles) === "border-box";
  var valueIsBorderBox = isBorderBox;

  // Computed unit is not pixels. Stop here and return.
  if ( rnumnonpx.test(val) ) {
    return val;
  }

  // Check for style in case a browser which returns unreliable values
  // for getComputedStyle silently falls back to the reliable elem.style
  valueIsBorderBox = valueIsBorderBox &&
    ( boxSizingReliableVal || val === elem.style[ dimension ] );

  // Fall back to offsetWidth/offsetHeight when value is "auto"
  // This happens for inline elements with no explicit setting (gh-3571)
  // Support: Android <=4.1 - 4.3 only
  // Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
  if ( val === "auto" ||
    !parseFloat(val) && css(elem, "display", false, styles) === "inline" ) {

    val = elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice(1) ];

    // offsetWidth/offsetHeight provide border-box values
    valueIsBorderBox = true;
  }

  // Normalize "" and auto
  val = parseFloat(val) || 0;

  // Adjust for the element's box model
  return ( val +
    boxModelAdjustment(
      elem,
      dimension,
      extra || ( isBorderBox ? "border" : "content" ),
      valueIsBorderBox,
      styles,

      // Provide the current computed size to request scroll gutter calculation (gh-3589)
      val
    )
  ) /*+ "px"*/;


}




let isCSSUnitNumber = /^[+-]?[0-9]+.?([0-9]+)?(px|em|ex|%|in|cm|mm|pt|pc|ch|rem|vw|vh|vmin|vmas)$/;


/*
 * @module ember-simple-dom-tools
 * @function getWidthOrHeight
 *
 * Creates a width or a height function
 *
 *
 *
 * ```
 *
 * @param {DomElement|NodeList|HTMLCollection|Array} elements
 * @param {string} [toHeight]
 * @returns {Number|undefined}
 */
function getWidthOrHeight( dimension ) {

  return function _dimension(isArray, elements, value ) {
    if ( elements ) {
      let element = ( isArray) ? elements[ 0 ] : elements;
      if ( value ) {
        element.style.height = value;
      }
      return value ? parseFloat(element.style.height) : _getWidthOrHeight(element, dimension);
    }
  }
}


function getWidthsOrHeights( dimension ) {

  return function _dimension( isArray, elements, value ) {

    if ( elements ) {
      if ( isArray) {
        let dimensions = [];
        for ( var i = 0; i < elements.length; i++ ) {
          dimensions.push(_dimension(!isArray,elements[ i ], value));
        }
      //  console.log('gar',dimensions);
        return dimensions;
      }
      else {
        if ( value ) {
          elements.style.height = value;
        }
        return value ? parseFloat(elements.style.height) : _getWidthOrHeight(elements, dimension);
      }
    }
  }
}


function dimension( dim ) {

  let dimension = getWidthOrHeight(dim);
  let dimensions = getWidthsOrHeights(dim);
  return function _dimension( elements, ...params ) {

    let value;
    if ( params ) {
      let valueType = typeof params[ 0 ];
      if ( valueType === 'number' && Number.isFinite(params[ 0 ]) ) {
        value = Math.round(params[ 0 ]) + 'px';
      }
      else if ( valueType === 'string' && isCSSUnitNumber.test(params[ 0 ]) ) {
        value = ( params[ 0 ].match(/\D+$/)[ 0 ] === 'px' ) ? (Math.round(parseFloat(params[ 0 ])) + "px") : params[ 0 ];
      }
    }
    let setAll = params.includes(DIMENSION_OPTIONS.SET_ALL);
    let returnArray = params.includes(DIMENSION_OPTIONS.RETURN_ARRAY);
    let isArray = ( Array.isArray(elements) || elements instanceof NodeList || elements instanceof HTMLCollection );
    if ( setAll || (returnArray && isArray) ) {
      let ret = dimensions(isArray,elements, value);
     // console.log('ret',ret);
      return returnArray ? ret : ret.length ? ret[ 0 ] : [];

    }
    else {

      let ret = returnArray ? [ dimension(isArray,elements, value) ] : dimension(isArray,elements, value);
    //  console.log('ret2',ret,isArray,elements,value)
      return ret;
    }
  };

}

export let height = dimension('height');


export let width = dimension("width");
