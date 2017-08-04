import {getStyles, curCSS, rnumnonpx, boxSizingReliableVal, boxModelAdjustment, css} from './css';

/*

https://github.com/jquery/jquery/pull/3561
 */
function _getWidthOrHeight( elem, dimension, extra ) {

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
export default function getWidthOrHeight( dimension ) {
  console.log(dimension);
  return function _dimension( elements, toDimension ) {
    let newDimension;
    if ( typeof toDimension == 'number' && Number.isFinite(toDimension) ) {
      newDimension = Math.round(toDimension);
    }

    if ( typeof toDimension == 'string' && /^[+-]?[0-9]+.?([0-9]+)?(px|em|ex|%|in|cm|mm|pt|pc|ch|rem|vw|vh|vmin|vmas)$/.test(toDimension) ) {
      let unit = toDimension.match(/\D+$/)[ 0 ];
      if ( unit === 'px' ) {
        newDimension = Math.round(parseFloat(toDimension)) + "px";
      }
      else {
        newDimension = toDimension;
      }
    }

    if ( elements ) {
      if ( Array.isArray(elements) || elements instanceof NodeList || elements instanceof HTMLCollection ) {
        let dimensions = [];
        for ( var i = 0; i < elements.length; i++ ) {
          dimensions.push(_dimension(elements[ i ], newDimension))
        }
        return (newDimension || dimensions.length <= 1) ? dimensions[ 0 ] : dimensions;

      }
      else {
        if ( newDimension ) {
          elements.style.height = newDimension;
        }

        return newDimension ? parseFloat(elements.style.height) : _getWidthOrHeight(elements, dimension);
      }
    }
  }
}