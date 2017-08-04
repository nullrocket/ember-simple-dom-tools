
import { test  } from 'ember-qunit';
import {select, create, append,height,empty} from 'ember-simple-dom-tools';

test("height function exists", function(assert){
  assert.ok(height);
});


test("Height Tests", function ( assert ) {

  empty(document.getElementById('ember-testing'));
  let fixture = document.getElementById('ember-testing');
  let testDom = `
    <div id="first" style="width:200px;height:200px;"></div>
    `;
  append(create(testDom), fixture);

  console.log(select('#first'));
  assert.equal(height(select('#first')),200, "Get height of single element");
 // assert.equal(height(select('#first'),'300px'),300, "Get height of single element");

//  assert.strictEqual(height(select('#first')),300, "Check changed height");
  //console.log(height(select('#first')));
});