# ember-simple-dom-tools

[![TravisCI Build Status][travis-badge]][travis-badge-url]

[travis-badge]: https://travis-ci.org/nullrocket/ember-simple-dom-tools.svg?branch=master
[travis-badge-url]: https://travis-ci.org/nullrocket/ember-simple-dom-tools


## Useless for the moment.
**THIS IS MUCH MORE TEDIOUS TO DO THAN I IMAGINED**
This library **ember-simple-dom-tools** is a collection of dom utilities as an alternative to jQuery or other dom manipulation libraries
This library is not as fully featured as jQuery but does allow you to pull in the bare minimum dom manipulation functionality needed.







## API Design summary


## Use

Install  addon

```sh
# ember-cli > 0.2.3
ember install ember-dom-simple-tools
# ember-cli <= 0.2.3
ember install:addon ember-dom-simple-tools
```

You can import individual modules

```js
import select from 'ember-dom-simple-tools/select';

let selectedDom = select('.content');
```

-or-

```js
import { select } from 'ember-dom-simple-tools';

let selectedDom = select('.content');
```


You can import the entire library on a single namespace

```js
import dom from 'ember-dom-simple-tools';


let selectedDom = dom.select('.content');
```



## Installation

* `git clone <repository-url>` this repository
    * `cd ember-simple-dom-tools`
    * `npm install`

    ## Running

    * `ember serve`
    * Visit your app at [http://localhost:4200](http://localhost:4200).

    ## Running Tests

    * `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
    * `ember test`
    * `ember test --server`

    ## Building

    * `ember build`

    For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
## Functions
<dl>
<dt><a href="#append">append(elements, destination)</a> ⇒ <code>Array</code> | <code>undefined</code></dt>
<dd><p>Append elements to a DomElement.</p>
</dd>
<dt><a href="#create">create(html)</a> ⇒ <code>NodeList</code></dt>
<dd></dd>
<dt><a href="#empty">empty(elements)</a> ⇒ <code>Array.&lt;(Elements|null)&gt;</code></dt>
<dd></dd>
<dt><a href="#height">height(elements, [toHeight], [...DIMENSION_OPTIONS])</a> ⇒ <code>Number</code> | <code>Array.&lt;Number&gt;</code> | <code>undefined</code></dt>
<dd><p>Get or set height for DomElements passed into <strong>elements</strong>.</p>
</dd>
<dt><a href="#outerHeight">outerHeight(elements, [margins])</a> ⇒ <code>Array</code></dt>
<dd></dd>
<dt><a href="#outerWidth">outerWidth(elements, [margins])</a> ⇒ <code>Array</code></dt>
<dd></dd>
<dt><a href="#remove">remove(elements)</a> ⇒ <code>Array.&lt;(Elements|null)&gt;</code></dt>
<dd></dd>
<dt><a href="#select">select(selector, context)</a> ⇒ <code>Array</code></dt>
<dd></dd>
<dt><a href="#width">width(elements, [toWidth], [...DIMENSION_OPTIONS])</a> ⇒ <code>Number</code> | <code>Array.&lt;Number&gt;</code> | <code>undefined</code></dt>
<dd><p>Get or set width for DomElements passed into <strong>elements</strong>.</p>
</dd>
</dl>

---
<br>
<a name="append"></a>

## append(elements, destination) ⇒ <code>Array</code> \| <code>undefined</code>

**Kind**: global function  
**Summary**: Append elements to a DomElement.  

| Param | Type | Description |
| --- | --- | --- |
| elements | <code>Array</code> | An element or an array of elements to append |
| destination | <code>DomElement</code> | A DOM element to append elements to. |

<br>
Append elements to a DomElement.


---
<br>
<a name="create"></a>

## create(html) ⇒ <code>NodeList</code>

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| html | <code>string</code> | A valid string of html |

<br>

---
<br>
<a name="empty"></a>

## empty(elements) ⇒ <code>Array.&lt;(Elements\|null)&gt;</code>

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| elements | <code>Element</code> \| <code>Array.&lt;Element&gt;</code> \| <code>NodeList</code> \| <code>HTMLCollection</code> | Elements to remove children from. |

<br>

---
<br>
<a name="height"></a>

## height(elements, [toHeight], [...DIMENSION_OPTIONS]) ⇒ <code>Number</code> \| <code>Array.&lt;Number&gt;</code> \| <code>undefined</code>

**Kind**: global function  
**Summary**: Get or set height for DomElements passed into **elements**.  

| Param | Type | Description |
| --- | --- | --- |
| elements | <code>DomElement</code> \| <code>NodeList</code> \| <code>HTMLCollection</code> \| <code>Array</code> | A DomElement or an array of DomElements. |
| [toHeight] | <code>string</code> \| <code>integer</code> | The toHeight param can be either a number or a string, if you wish to specify units you must pass a string. |
| [...DIMENSION_OPTIONS] | <code>DIMENSION_OPTIONS</code> |  |

**Returns**: <code>Number</code> \| <code>Array.&lt;Number&gt;</code> \| <code>undefined</code> - Either a length or an array of lengths depending on the options passed in, values are in px units. Returns undefined if an element is not found.  
<br>
```html
//index.html
...
<div class="content" style="height:500px" >
  <p class="intro" style="height:500px" > </p>
  <p class="intro" style="height:500px" ></p>
  <p class="intro" style="height:500px" ></p>
</div>
...
```

```javascript
//height.js
import {height,select,DIMENSION_OPTIONS} from 'ember-simple-dom-tools';
let contentDom = select('.content');

// height called with single element and no options will return a single value.
height(contentDom); // 500

// height called with a single element and the option DIMENSION_OPTIONS.RETURN_ARRAY
// will always return an array of values.
height(contentDom,DIMENSION_OPTIONS.RETURN_ARRAY); // [500]

// height called with an array of elements will return the height of the
// first element.
let paragraphDom = select('p');
height(paragraphDom); // 500

// height called with an array of elements  and the option
// DIMENSION_OPTIONS.RETURN ARRAY will return an array of all the passed elements heights.
height(paragraphDom,DIMENSION_OPTIONS.RETURN_ARRAY); // [500,500,500]

// height called with single element, a value, and no options will set the
// elements height and return the newly set height.
height(contentDom,600); // 600

// height called with single element, a value, and DIMENSION_OPTIONS.RETURN_ARRAY
// will set the elements height and return the newly set height as an array.
height(contentDom,700,DIMENSION_OPTIONS.RETURN_ARRAY); // [700]

// height called with an array of elements and a value will set the first elements
// height and return the newly set height.
height(paragraphDomDom,700); // 700

// height called with an array of elements, a value and DIMENSION_OPTIONS.RETURN_ARRAY
// will set all elements height and return an array of heights.
height(paragraphDomDom,800,DIMENSION_OPTIONS.RETURN_ARRAY); // [800,800,800]


```


---
<br>
<a name="outerHeight"></a>

## outerHeight(elements, [margins]) ⇒ <code>Array</code>

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| elements | <code>Array</code> | An element or an array of elements to get outerHeight from |
| [margins] | <code>boolean</code> | If true include margins in the return value. |

<br>

---
<br>
<a name="outerWidth"></a>

## outerWidth(elements, [margins]) ⇒ <code>Array</code>

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| elements | <code>Array</code> | An element or an array of elements to get outerWidth from |
| [margins] | <code>boolean</code> | If true include margins in the return value. |

<br>

---
<br>
<a name="remove"></a>

## remove(elements) ⇒ <code>Array.&lt;(Elements\|null)&gt;</code>

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| elements | <code>Element</code> \| <code>Array.&lt;Element&gt;</code> \| <code>NodeList</code> \| <code>HTMLCollection</code> | Elements to remove. |

<br>

---
<br>
<a name="select"></a>

## select(selector, context) ⇒ <code>Array</code>

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| selector | <code>string</code> | A valid css selector |
| context | <code>DomElement</code> | A DOM element to use as context |

**Returns**: <code>Array</code> - Returns an array of elements matching the selector, or an empty array if no elements match.  
<br>
A wrapper around native dom element selection methods **document.getElementById**, **document.querySelectorAll**, **document.getElementsByClassName** and **document.getElementsByTagName**.
```javascript
select
```


---
<br>
<a name="width"></a>

## width(elements, [toWidth], [...DIMENSION_OPTIONS]) ⇒ <code>Number</code> \| <code>Array.&lt;Number&gt;</code> \| <code>undefined</code>

**Kind**: global function  
**Summary**: Get or set width for DomElements passed into **elements**.  

| Param | Type | Description |
| --- | --- | --- |
| elements | <code>DomElement</code> \| <code>NodeList</code> \| <code>HTMLCollection</code> \| <code>Array</code> | A DomElement or an array of DomElements. |
| [toWidth] | <code>string</code> \| <code>integer</code> | The toWidth param can be either a number or a string, if you wish to specify units you must pass a string. |
| [...DIMENSION_OPTIONS] | <code>DIMENSION_OPTIONS</code> |  |

**Returns**: <code>Number</code> \| <code>Array.&lt;Number&gt;</code> \| <code>undefined</code> - Either a length or an array of lengths depending on the options passed in, values are in px units. Returns undefined if an element is not found.  
<br>
```html
//index.html
...
<div class="content" style="width:500px" >
  <p class="intro" style="width:500px" > </p>
  <p class="intro" style="width:500px" ></p>
  <p class="intro" style="width:500px" ></p>
</div>
...
```

```javascript
//width.js
import {width,select,DIMENSION_OPTIONS} from 'ember-simple-dom-tools';
let contentDom = select('.content');

// width called with single element and no options will return a single value.
width(contentDom); // 500

// width called with a single element and the option DIMENSION_OPTIONS.RETURN_ARRAY
// will always return an array of values.
width(contentDom,DIMENSION_OPTIONS.RETURN_ARRAY); // [500]

// width called with an array of elements will return the width of the
// first element.
let paragraphDom = select('p');
width(paragraphDom); // 500

// width called with an array of elements  and the option
// DIMENSION_OPTIONS.RETURN ARRAY will return an array of all the passed elements widths.
width(paragraphDom,DIMENSION_OPTIONS.RETURN_ARRAY); // [500,500,500]

// width called with single element, a value, and no options will set the
// elements width and return the newly set width.
width(contentDom,600); // 600

// width called with single element, a value, and DIMENSION_OPTIONS.RETURN_ARRAY
// will set the elements width and return the newly set width as an array.
width(contentDom,700,DIMENSION_OPTIONS.RETURN_ARRAY); // [700]

// width called with an array of elements and a value will set the first elements
// width and return the newly set width.
width(paragraphDomDom,700); // 700

// width called with an array of elements, a value and DIMENSION_OPTIONS.RETURN_ARRAY
// will set all elements width and return an array of widths.
width(paragraphDomDom,800,DIMENSION_OPTIONS.RETURN_ARRAY); // [800,800,800]


```


