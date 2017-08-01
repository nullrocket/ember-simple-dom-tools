let core_pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
let rmargin = /^margin/;
let rcustomProp = /^--/
let rnumsplit = new RegExp("^(" + core_pnum + ")(.*)$", "i");
let rnumnonpx = new RegExp("^(" + core_pnum + ")(?!px)[a-z%]+$", "i");
let rrelNum = new RegExp("^([+-])=(" + core_pnum + ")", "i");


// Exclude the following css properties to add px
let cssNumber = {
  "columnCount": true,
  "fillOpacity": true,
  "fontWeight": true,
  "lineHeight": true,
  "opacity": true,
  "orphans": true,
  "widows": true,
  "zIndex": true,
  "zoom": true
};

let div = document.createElement('div');
var

  // Swappable if display is none or starts with table
  // except "table", "table-cell", or "table-caption"
  // See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
  rdisplayswap = /^(none|table(?!-c[ea]).+)/,

  cssShow = {
    position: "absolute",
    visibility: "hidden",
    display: "block"
  },
  cssNormalTransform = {
    letterSpacing: "0",
    fontWeight: "400"
  },

  cssPrefixes = [ "Webkit", "Moz", "ms" ],

  emptyStyle = div.style;
let cssFloat = !!document.createElement('a').style.cssFloat;
let clearCloneStyle = div.style.backgroundClip === "content-box";

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

  // Shortcut for names that are not vendor prefixed
  if ( name in emptyStyle ) {
    return name;
  }

  // Check for vendor prefixed names
  var capName = name[ 0 ].toUpperCase() + name.slice(1),
    i = cssPrefixes.length;

  while ( i-- ) {
    name = cssPrefixes[ i ] + capName;
    if ( name in emptyStyle ) {
      return name;
    }
  }
}


// Add in properties whose names you wish to fix before
// setting or getting the value
let cssProps = {

  // normalize float css property
  "float": cssFloat ? "cssFloat" : "styleFloat"
}


// Return a property mapped along what jQuery.cssProps suggests or to
// a vendor prefixed property.
function finalPropName( name ) {
  var ret = cssProps[ name ];
  if ( !ret ) {
    ret = cssProps[ name ] = vendorPropName(name) || name;
  }
  return ret;
}

function getStyles( elem ) {

  // Support: IE<=11+, Firefox<=30+ (#15098, #14150)
  // IE throws on elements created in popups
  // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
  var view = elem.ownerDocument.defaultView;
  if ( !view.opener ) {
    view = window;
  }

  return view.getComputedStyle(elem);
}

let cssHooks = {
  opacity: {
    get: function ( elem, computed ) {
      if ( computed ) {

        // We should always get a number back from opacity
        var ret = curCSS(elem, "opacity");
        return ret === "" ? "1" : ret;
      }
    }
  }
}


let pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
let rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");


// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
let rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

// Matches dashed string for camelizing
let rmsPrefix = /^-ms-/;
let rdashAlpha = /-([a-z])/g;

// Used by jQuery.camelCase as callback to replace()
function fcamelCase( all, letter ) {
  return letter.toUpperCase();
};
// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
  return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
};

function adjustCSS( elem, prop, valueParts, tween ) {
  var adjusted,
    scale = 1,
    maxIterations = 20,
    currentValue = tween ?
      function () {
        return tween.cur();
      } :
      function () {
        return css(elem, prop, "");
      },
    initial = currentValue(),
    unit = valueParts && valueParts[ 3 ] || ( cssNumber[ prop ] ? "" : "px" ),

    // Starting value computation is required for potential unit mismatches
    initialInUnit = ( cssNumber[ prop ] || unit !== "px" && +initial ) &&
      rcssNum.exec(css(elem, prop));

  if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

    // Trust units reported by jQuery.css
    unit = unit || initialInUnit[ 3 ];

    // Make sure we update the tween properties later on
    valueParts = valueParts || [];

    // Iteratively approximate from a nonzero starting point
    initialInUnit = +initial || 1;

    do {

      // If previous iteration zeroed out, double until we get *something*.
      // Use string for doubling so we don't accidentally see scale as unchanged below
      scale = scale || ".5";

      // Adjust and apply
      initialInUnit = initialInUnit / scale;
      style(elem, prop, initialInUnit + unit);

      // Update scale, tolerating zero or NaN from tween.cur()
      // Break the loop if scale is unchanged or perfect, or if we've just had enough.
    } while (
      scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
      );
  }

  if ( valueParts ) {
    initialInUnit = +initialInUnit || +initial || 0;

    // Apply relative offset (+=/-=) if specified
    adjusted = valueParts[ 1 ] ?
      initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
      +valueParts[ 2 ];
    if ( tween ) {
      tween.unit = unit;
      tween.start = initialInUnit;
      tween.end = adjusted;
    }
  }
  return adjusted;
}

function style( elem, name, value, extra ) {

  // Don't set styles on text and comment nodes
  if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
    return;
  }

  // Make sure that we're working with the right name
  var ret;
  let type;
  let hooks;
  let origName = camelCase(name);
  let isCustomProp = rcustomProp.test(name);
  let style = elem.style;

  // Make sure that we're working with the right name. We don't
  // want to query the value if it is a CSS custom property
  // since they are user-defined.
  if ( !isCustomProp ) {
    name = finalPropName(origName);
  }

  // Gets hook for the prefixed version, then unprefixed version
  hooks = cssHooks[ name ] || cssHooks[ origName ];

  // Check if we're setting a value
  if ( value !== undefined ) {
    type = typeof value;

    // Convert "+=" or "-=" to relative numbers (#7345)
    if ( type === "string" && ( ret = rcssNum.exec(value) ) && ret[ 1 ] ) {
      value = adjustCSS(elem, name, ret);

      // Fixes bug #9237
      type = "number";
    }

    // Make sure that null and NaN values aren't set (#7116)
    if ( value == null || value !== value ) {
      return;
    }

    // If a number was passed in, add the unit (except for certain CSS properties)
    if ( type === "number" ) {
      value += ret && ret[ 3 ] || ( cssNumber[ origName ] ? "" : "px" );
    }

    // background-* props affect original clone's values
    if ( !clearCloneStyle && value === "" && name.indexOf("background") === 0 ) {
      style[ name ] = "inherit";
    }

    // If a hook was provided, use that value, otherwise just set the specified value
    if ( !hooks || !( "set" in hooks ) ||
      ( value = hooks.set(elem, value, extra) ) !== undefined ) {

      if ( isCustomProp ) {
        style.setProperty(name, value);
      }
      else {
        style[ name ] = value;
      }
    }

  }
  else {

    // If a hook was provided get the non-computed value from there
    if ( hooks && "get" in hooks &&
      ( ret = hooks.get(elem, false, extra) ) !== undefined ) {

      return ret;
    }

    // Otherwise just get the value from the style object
    return style[ name ];
  }
}

function css( elem, name, extra, styles ) {
  var val, num, hooks,
    origName = camelCase(name),
    isCustomProp = rcustomProp.test(name);

  // Make sure that we're working with the right name. We don't
  // want to modify the value if it is a CSS custom property
  // since they are user-defined.
  if ( !isCustomProp ) {
    name = finalPropName(origName);
  }

  // Try prefixed name followed by the unprefixed name
  hooks = cssHooks[ name ] || cssHooks[ origName ];

  // If a hook was provided get the computed value from there
  if ( hooks && "get" in hooks ) {
    val = hooks.get(elem, true, extra);
  }

  // Otherwise, if a way to get the computed value exists, use that
  if ( val === undefined ) {
    val = curCSS(elem, name, styles);
  }

  // Convert "normal" to computed value
  if ( val === "normal" && name in cssNormalTransform ) {
    val = cssNormalTransform[ name ];
  }

  // Make numeric if forced or a qualifier was provided and val looks numeric
  if ( extra === "" || extra ) {
    num = parseFloat(val);
    return extra === true || isFinite(num) ? num || 0 : val;
  }

  return val;
}


var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelMarginRightVal,
  reliableMarginLeftVal,
  container = document.createElement("div");//,
// div = document.createElement("div");


// Executing both pixelPosition & boxSizingReliable tests require only one layout
// so they're executed at the same time to save the second computation.
function computeStyleTests() {

  // This is a singleton, we need to execute it only once
  if ( !div ) {
    return;
  }

  container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
    "margin-top:1px;padding:0;border:0";
  div.style.cssText =
    "position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
    "margin:auto;border:1px;padding:1px;" +
    "width:60%;top:1%";

  document.documentElement.appendChild(container).appendChild(div);

  var divStyle = window.getComputedStyle(div);

  pixelPositionVal = divStyle.top !== "1%";

  // Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
  reliableMarginLeftVal = divStyle.marginLeft === "12px";

  // Support: Android 4.0 - 4.3 only
  // Some styles come back with percentage values, even though they shouldn't
  div.style.marginRight = "60%";
  pixelMarginRightVal = divStyle.marginRight === "36px";

  // Support: IE 9 - 11 only
  // Detect misreporting of content dimensions for box-sizing:border-box elements
  boxSizingReliableVal = divStyle.width === "36px";

  // Support: IE 9 only
  // Detect overflow:scroll screwiness (gh-3699)
  div.style.position = "absolute";
  scrollboxSizeVal = div.offsetWidth === 36 || "absolute";

  document.documentElement.removeChild(container);

  // Nullify the div so it wouldn't be stored in the memory and
  // it will also be a sign that checks already performed



  // Support: IE <=9 - 11 only
  // Style of cloned element affects source element cloned (#8908)
  div.style.backgroundClip = "content-box";
  div.cloneNode(true).style.backgroundClip = "";
  clearCloneStyle = div.style.backgroundClip === "content-box";
  div = null;


}

let cssExpand = [ "Top", "Right", "Bottom", "Left" ];

computeStyleTests();

function curCSS( elem, name, computed ) {
  var width, minWidth, maxWidth, ret,
    style = elem.style;

  computed = computed || getStyles(elem);

  // Support: IE9
  // getPropertyValue is only needed for .css('filter') (#12537)
  if ( computed ) {
    ret = computed[ name ];

    if ( ret === "" && ! elem.ownerDocument.contains( elem) ) {
      ret = style(elem, name);
    }

    // A tribute to the "awesome hack by Dean Edwards"
    // Android Browser returns percentage for some values,
    // but width seems to be reliably pixels.
    // This is against the CSSOM draft spec:
    // http://dev.w3.org/csswg/cssom/#resolved-values
    if ( !pixelMarginRightVal && rnumnonpx.test(ret) && rmargin.test(name) ) {

      // Remember the original values
      width = style.width;
      minWidth = style.minWidth;
      maxWidth = style.maxWidth;

      // Put in the new values to get a computed value out
      style.minWidth = style.maxWidth = style.width = ret;
      ret = computed.width;

      // Revert the changed values
      style.width = width;
      style.minWidth = minWidth;
      style.maxWidth = maxWidth;
    }
  }

  return ret !== undefined ?
    // Support: IE9-11+
    // IE returns zIndex value as an integer.
    ret + "" :
    ret;
}
function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
  var i = dimension === "width" ? 1 : 0,
    extra = 0,
    delta = 0;

  // Adjustment may not be necessary
  if ( box === ( isBorderBox ? "border" : "content" ) ) {
    return 0;
  }

  for ( ; i < 4; i += 2 ) {

    // Both box models exclude margin
    if ( box === "margin" ) {
      delta += css( elem, box + cssExpand[ i ], true, styles );
    }

    // If we get here with a content-box, we're seeking "padding" or "border" or "margin"
    if ( !isBorderBox ) {

      // Add padding
      delta += css( elem, "padding" + cssExpand[ i ], true, styles );

      // For "border" or "margin", add border
      if ( box !== "padding" ) {
        delta += css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

        // But still keep track of it otherwise
      } else {
        extra += css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
      }

      // If we get here with a border-box (content + padding + border), we're seeking "content" or
      // "padding" or "margin"
    } else {

      // For "content", subtract padding
      if ( box === "content" ) {
        delta -= css( elem, "padding" + cssExpand[ i ], true, styles );
      }

      // For "content" or "padding", subtract border
      if ( box !== "margin" ) {
        delta -= css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
      }
    }
  }

  // Account for positive content-box scroll gutter when requested by providing computedVal
  if ( !isBorderBox && computedVal >= 0 ) {

    // offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
    // Assuming integer scroll gutter, subtract the rest and round down
    delta += Math.max( 0, Math.ceil(
      elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
      computedVal -
      delta -
      extra -
      0.5
    ) );
  }

  return delta;
}

/*

https://github.com/jquery/jquery/pull/3561
 */
export default function getWidthOrHeight( elem, dimension, extra ) {

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
