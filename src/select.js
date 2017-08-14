import nonnative_slice from './__slice';

let idMatch = /^#[\w-]*$/,
  classMatch = /^\.[\w-]*$/,
  htmlMatch = /<.+>/,
  singlet = /^\w+$/;
let isString = function ( item ) { return typeof item === typeof ''; };


/*elementList = document.querySelectorAll(selectors);
where

elementList is a non-live NodeList of element objects.
selectors is a string containing one or more CSS selectors separated by commas.
*/


/*
element = document.getElementById(id);
Parameters
id
is a case-sensitive string representing the unique ID of the element being sought.
  Return Value
element
is a reference to an Element object, or null if an element with the specified ID is not in the document.
*/


/*
var elements = document.getElementsByClassName(names); // or:
var elements = rootElement.getElementsByClassName(names);
elements is a live HTMLCollection of found elements.
names is a string representing the list of class names to match; class names are separated by whitespace
getElementsByClassName can be called on any element, not only on the document. The element on which it is called will be used as the root of the search.
 */


/*
var elements = document.getElementsByTagName(name);
elements is a live HTMLCollection (but see the note below) of found elements in the order they appear in the tree.
name is a string representing the name of the elements. The special string "*" represents all elements.
The latest W3C specification says elements is an HTMLCollection; however, this method returns a NodeList in WebKit browsers. See bug 14869 for details.
 */
function find( selector, context ) {
  context = context || document;
  let elems;
  try {
    elems = (
      classMatch.test(selector) ?
        context.getElementsByClassName(selector.slice(1))
        :
        singlet.test(selector) ?
          context.getElementsByTagName(selector)
          :
          context.querySelectorAll(selector)
    );
  }
  catch ( e ) {
    return [];
  }

  return [ ...elems ];
}


/**
 * @module ember-simple-dom-tools
 * @function select
 * @description
 * A wrapper around native dom element selection methods **document.getElementById**, **document.querySelectorAll**, **document.getElementsByClassName** and **document.getElementsByTagName**.
 * ```javascript
 * select
 * ```
 *
 *
 *
 * @param {string} selector A valid css selector
 * @param {DomElement} context A DOM element to use as context
 * @returns {Array} Returns an array of elements matching the selector, or an empty array if no elements match.
 */
export default function ( selector, context ) {
  context = context || document;
  if ( !selector ) { return []}

  let found;
  let empty = [];
  return isString(selector) ?
    idMatch.test(selector) ?
      // If an ID use the faster getElementById check
      (found = document.getElementById(selector.slice(1))) ? [ found ] : empty
      :
    (
        classMatch.test(selector) ?
          nonnative_slice(context.getElementsByClassName(selector.slice(1)))
          :
          singlet.test(selector) ?
            nonnative_slice(context.getElementsByTagName(selector))
            :
            nonnative_slice(context.querySelectorAll(selector))
      )
    :
    empty;

}

