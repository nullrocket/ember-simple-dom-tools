let frag;

/**
 * @module ember-simple-dom-tools
 * @function create
 * @kind function
 * @param {string} A valid string of html
 * @returns {NodeList}
 */
export default function (str) {
  if (!frag) {
    frag = document.implementation.createHTMLDocument('');
    let base = frag.createElement('base');
    base.href = document.location.href;
    frag.head.appendChild(base);
  }
  frag.body.innerHTML = str;
  return frag.body.childNodes;
}

