# ember-simple-dom-tools

[![TravisCI Build Status][travis-badge]][travis-badge-url]

[travis-badge]: https://travis-ci.org/nullrocket/ember-simple-dom-tools.svg?branch=master
[travis-badge-url]: https://travis-ci.org/nullrocket/ember-simple-dom-tools


Absolutely untested and highly experimental.  Actually useless for the moment.

ember-simple-dom-tools is a collection of dom utilities as an alternative to jQuery.

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
<dd></dd>
<dt><a href="#create">create(html)</a> ⇒ <code>NodeList</code></dt>
<dd></dd>
<dt><a href="#empty">empty(elements)</a> ⇒ <code>Array.&lt;(Elements|null)&gt;</code></dt>
<dd></dd>
<dt><a href="#height">height(elements, [toHeight])</a> ⇒ <code>Number</code> | <code>Array.&lt;Number&gt;</code> | <code>undefined</code></dt>
<dd><p>Get the current height for each elements passed into <strong>elements</strong> or set the height of each element passed into <strong>elements</strong></p>
</dd>
<dt><a href="#heights">heights(elements, [toHeight])</a> ⇒ <code>Number</code> | <code>Array.&lt;Number&gt;</code> | <code>undefined</code></dt>
<dd><p>Get the current height for each elements passed into <strong>elements</strong> or set the height of each element passed into <strong>elements</strong></p>
</dd>
<dt><a href="#outerHeight">outerHeight(elements, [margins])</a> ⇒ <code>Array</code></dt>
<dd></dd>
<dt><a href="#outerWidth">outerWidth(elements, [margins])</a> ⇒ <code>Array</code></dt>
<dd></dd>
<dt><a href="#remove">remove(elements)</a> ⇒ <code>Array.&lt;(Elements|null)&gt;</code></dt>
<dd></dd>
<dt><a href="#select">select(selector, context)</a> ⇒ <code>Array</code></dt>
<dd></dd>
<dt><a href="#width">width(elements, [toWidth])</a> ⇒ <code>Number</code> | <code>Array.&lt;Number&gt;</code> | <code>undefined</code></dt>
<dd></dd>
</dl>
<a name="append"></a>

## append(elements, destination) ⇒ <code>Array</code> \| <code>undefined</code>
**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| elements | <code>Array</code> | An element or an array of elements to append |
| destination | <code>DomElement</code> | A DOM element to append elements to. |

<a name="create"></a>

## create(html) ⇒ <code>NodeList</code>
**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| html | <code>string</code> | A valid string of html |

<a name="empty"></a>

## empty(elements) ⇒ <code>Array.&lt;(Elements\|null)&gt;</code>
**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| elements | <code>Element</code> \| <code>Array.&lt;Element&gt;</code> \| <code>NodeList</code> \| <code>HTMLCollection</code> | Elements to remove children from. |

<a name="height"></a>

## height(elements, [toHeight]) ⇒ <code>Number</code> \| <code>Array.&lt;Number&gt;</code> \| <code>undefined</code>
**Kind**: global function  
**Summary**: Get the current height for each elements passed into **elements** or set the height of each element passed into **elements**  

| Param | Type | Description |
| --- | --- | --- |
| elements | <code>DomElement</code> \| <code>NodeList</code> \| <code>HTMLCollection</code> \| <code>Array</code> | A DomElement or an array of DomElements. |
| [toHeight] | <code>string</code> \| <code>integer</code> | The toHeight param can be either a number or a string, if you wish to specify units you must pass a string. |

**Returns**: <code>Number</code> \| <code>Array.&lt;Number&gt;</code> \| <code>undefined</code> - Either a length in px or an array of lengths.  
When called with a single **elements** argument **height** will return a height as a number, this number is in **px** units.
```html
<div class=".content" style="height:500px" ></div>
```
```javascript
import {height,select} from 'ember-simple-dom-tools';
let contentDom = select('.content');
height(contentDom); // 500px
```


When called with multiple **elements** argument **height** will return an Array<number> of height in **px** units.
```html
<p class=".intro" style="height:500px" >
</p><p class=".intro" style="height:500px" ></p>
<p class=".intro" style="height:500px" ></p>
```
```javascript
import {height,select} from 'ember-simple-dom-tools';
let paragraphDom = select('p');
height(paragraphDom); // 500px
```

<a name="heights"></a>

## heights(elements, [toHeight]) ⇒ <code>Number</code> \| <code>Array.&lt;Number&gt;</code> \| <code>undefined</code>
**Kind**: global function  
**Summary**: Get the current height for each elements passed into **elements** or set the height of each element passed into **elements**  

| Param | Type | Description |
| --- | --- | --- |
| elements | <code>DomElement</code> \| <code>NodeList</code> \| <code>HTMLCollection</code> \| <code>Array</code> | A DomElement or an array of DomElements. |
| [toHeight] | <code>string</code> \| <code>integer</code> | The toHeight param can be either a number or a string, if you wish to specify units you must pass a string. |

**Returns**: <code>Number</code> \| <code>Array.&lt;Number&gt;</code> \| <code>undefined</code> - Either a length in px or an array of lengths.  
When called with a single **elements** argument **height** will return a height as a number, this number is in **px** units.
```html
<div class=".content" style="height:500px" ></div>
```
```javascript
import {height,select} from 'ember-simple-dom-tools';
let contentDom = select('.content');
height(contentDom); // 500px
```


When called with multiple **elements** argument **height** will return an Array<number> of height in **px** units.
```html
<p class=".intro" style="height:500px" >
</p><p class=".intro" style="height:500px" ></p>
<p class=".intro" style="height:500px" ></p>
```
```javascript
import {height,select} from 'ember-simple-dom-tools';
let paragraphDom = select('p');
height(paragraphDom); // 500px
```

<a name="outerHeight"></a>

## outerHeight(elements, [margins]) ⇒ <code>Array</code>
**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| elements | <code>Array</code> | An element or an array of elements to get outerHeight from |
| [margins] | <code>boolean</code> | If true include margins in the return value. |

<a name="outerWidth"></a>

## outerWidth(elements, [margins]) ⇒ <code>Array</code>
**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| elements | <code>Array</code> | An element or an array of elements to get outerWidth from |
| [margins] | <code>boolean</code> | If true include margins in the return value. |

<a name="remove"></a>

## remove(elements) ⇒ <code>Array.&lt;(Elements\|null)&gt;</code>
**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| elements | <code>Element</code> \| <code>Array.&lt;Element&gt;</code> \| <code>NodeList</code> \| <code>HTMLCollection</code> | Elements to remove. |

<a name="select"></a>

## select(selector, context) ⇒ <code>Array</code>
**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| selector | <code>string</code> | A valid css selector |
| context | <code>DomElement</code> | A DOM element to use as context |

**Returns**: <code>Array</code> - Returns an array of elements matching the selector, or an empty array if no elements match.  
A wrapper around native dom element selection methods **document.getElementById**, **document.querySelectorAll**, **document.getElementsByClassName** and **document.getElementsByTagName**.
```javascript
select
```

<a name="width"></a>

## width(elements, [toWidth]) ⇒ <code>Number</code> \| <code>Array.&lt;Number&gt;</code> \| <code>undefined</code>
**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| elements | <code>Element</code> \| <code>Array.&lt;Element&gt;</code> \| <code>NodeList</code> \| <code>HTMLCollection</code> | Elements to get the width of. |
| [toWidth] | <code>string</code> | If supplied will set the width of the passed elements. |

https://github.com/jquery/jquery/issues/3193


