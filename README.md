# ember-simple-dom-tools

Absolutely untested and highly experimental.  Actually useless for the moment.

ember-simple-dom-tools is a collection of dom utilities as an alternative to jQuery.

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
<dt><a href="#height">height(elements, [toHeight])</a> ⇒ <code>Number</code> | <code>undefined</code></dt>
<dd></dd>
<dt><a href="#outerHeight">outerHeight(elements, [margins])</a> ⇒ <code>Array</code></dt>
<dd></dd>
<dt><a href="#outerWidth">outerWidth(elements, [margins])</a> ⇒ <code>Array</code></dt>
<dd></dd>
<dt><a href="#select">select(selector, context)</a> ⇒ <code>Array</code></dt>
<dd></dd>
<dt><a href="#width">width(elements, [toWidth])</a> ⇒ <code>Number</code> | <code>undefined</code></dt>
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

<a name="height"></a>

## height(elements, [toHeight]) ⇒ <code>Number</code> \| <code>undefined</code>
**Kind**: global function  

| Param | Type |
| --- | --- |
| elements | <code>DomElement</code> \| <code>NodeList</code> \| <code>HTMLCollection</code> \| <code>Array</code> | 
| [toHeight] | <code>string</code> | 

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

<a name="select"></a>

## select(selector, context) ⇒ <code>Array</code>
**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| selector | <code>string</code> | A valid css selector |
| context | <code>DomElement</code> | A DOM element to use as context |

<a name="width"></a>

## width(elements, [toWidth]) ⇒ <code>Number</code> \| <code>undefined</code>
**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| elements | <code>Element</code> \| <code>Array.&lt;Element&gt;</code> \| <code>NodeList</code> \| <code>HTMLCollection</code> | Elements to get the width of. |
| [toWidth] | <code>string</code> | If supplied will set the width of the passed elements. |


