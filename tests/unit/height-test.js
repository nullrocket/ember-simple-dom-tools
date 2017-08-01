
import { test  } from 'ember-qunit';
import {select, create, append,height,empty} from 'ember-simple-dom-tools';

test("height function exists", function(assert){
  assert.ok(height);
});


test("Get heights", function ( assert ) {

  empty(document.getElementById('ember-testing'));
  let fixture = document.getElementById('ember-testing');
  let testDom = `
  <div id="first" style="width:200px;height:200px;"></div>`;
  append(create(testDom), fixture);

  assert.equal(height(select('#first'))[0],200, "Get height of single element");



});