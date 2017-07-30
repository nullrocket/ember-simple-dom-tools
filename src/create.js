let frag;
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

