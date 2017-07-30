let idMatch = /^#[\w-]*$/,
  classMatch = /^\.[\w-]*$/,
  htmlMatch = /<.+>/,
  singlet = /^\w+$/;
let isString = function(item) { return typeof item === typeof ''; };
function find( selector, context ) {
  context = context || document;
  let elems;
  try {
     elems = (
      classMatch.test(selector) ?
        context.getElementsByClassName(selector.slice(1)) :
        singlet.test(selector) ?
          context.getElementsByTagName(selector) :
          context.querySelectorAll(selector)
    );
  }
  catch(e){
    return [];
  }
  return elems;
}




/**
 * @module ember-simple-dom-tools
 * @function select
 * @selector {string} selector A valid css selector
 * @param {DomElement} element
 * @param {Array} [context]
 * @returns {Array}
 */
export default function ( selector, context ) {

  if ( !selector ) { return []}
  let elems;
  if ( isString(selector) ) {
    elems = (
      idMatch.test(selector) ?
        // If an ID use the faster getElementById check
        document.getElementById(selector.slice(1)) :

          find(selector,context)
    );

    // If function, use as shortcut for DOM ready
  }
  if(!elems)
  {
    return [];
  }
  if ( elems.nodeType || elems === window ) {
    return [elems];

  } else {
    // Treat like an array and loop through each item.
    return elems;
  }

}