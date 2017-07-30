# ember-simple-dom-tools

Absolutely untested and highly experimental.

ember-simple-dom-tools is a collection of dom utilities as an alternative to jQuery.

---

---
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
<dt><a href="#height">height(elements, [toHeight])</a> ⇒ <code>Number</code> | <code>undefined</code></dt>
<dd></dd>
<dt><a href="#select">select(selector, element, [context])</a> ⇒ <code>Array</code></dt>
<dd></dd>
<dt><a href="#width">width(elements, [toWidth])</a> ⇒ <code>Number</code> | <code>undefined</code></dt>
<dd></dd>
</dl>

<a name="height"></a>

## height(elements, [toHeight]) ⇒ <code>Number</code> \| <code>undefined</code>
**Kind**: global function  

| Param | Type |
| --- | --- |
| elements | <code>DomElement</code> \| <code>NodeList</code> \| <code>HTMLCollection</code> \| <code>Array</code> | 
| [toHeight] | <code>string</code> | 

<a name="select"></a>

## select(selector, element, [context]) ⇒ <code>Array</code>
**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| selector | <code>string</code> | A valid css selector |
| element | <code>DomElement</code> | A DOM element to use as context |
| [context] | <code>Array</code> |  |

<a name="width"></a>

## width(elements, [toWidth]) ⇒ <code>Number</code> \| <code>undefined</code>
**Kind**: global function  

| Param | Type |
| --- | --- |
| elements | <code>DomElement</code> \| <code>NodeList</code> \| <code>HTMLCollection</code> \| <code>Array</code> | 
| [toWidth] | <code>string</code> | 


