# ember-simple-dom-tools

Absolutely untested and highly experimental.  Actually useless for the moment.

ember-simple-dom-tools is a collection of dom utilities as an alternative to jQuery.

## Use

First you install this addon

```sh
# ember-cli > 0.2.3
ember install ember-dom-simple-tools
# ember-cli <= 0.2.3
ember install:addon ember-dom-simple-tools
```

And then in your ember.js app, you can import individual modules

```js
import select from 'ember-dom-simple-tools/select';

let selectedDom = select('.content');
```

Additionally, if you wish to work with the entire lodash library on a single namespace, you have the option of importing that as well

```js
import _ from 'lodash';

let truncatedString = _.trunc(rawString);
```

It is also possible to import individual modules

```js
import { trunc } from 'lodash';

let truncatedString = trunc(rawString);
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
<dt><a href="#create">create(A)</a> ⇒ <code>NodeList</code></dt>
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

## create(A) ⇒ <code>NodeList</code>
**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| A | <code>string</code> | valid string of html |

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

| Param | Type |
| --- | --- |
| elements | <code>DomElement</code> \| <code>NodeList</code> \| <code>HTMLCollection</code> \| <code>Array</code> | 
| [toWidth] | <code>string</code> | 


