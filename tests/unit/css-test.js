
import { test  } from 'ember-qunit';
import {select,empty,create,append} from 'ember-simple-dom-tools';
import {css} from 'ember-simple-dom-tools/css';
import {style} from 'ember-simple-dom-tools/css';

test("css function exists", function(assert){
  assert.ok(css);
});


test("CSS", function ( assert ) {

  empty(document.getElementById('ember-testing'));
  let fixture = document.getElementById('ember-testing');
  let testDom = `
  <div id="first" style="width:200px;height:200px"></div>`;
  append(create(testDom), fixture);
  style(select('#first')[0],'background','blue');

  assert.equal(style(select('#first')[0],'background'),'blue', "Get background");



});