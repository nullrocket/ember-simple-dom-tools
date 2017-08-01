
import { test  } from 'ember-qunit';
import {select, create, append,width,empty} from 'ember-simple-dom-tools';

test("width function exists", function(assert){
  assert.ok(width);
});


test("Get widths", function ( assert ) {

  empty(document.getElementById('ember-testing'));
  let fixture = document.getElementById('ember-testing');
  let testDom = `
  <div id="first" style="width:200px"></div>`;
  append(create(testDom), fixture);

  assert.equal(width(select('#first'))[0],200, "Get width of single element");



});