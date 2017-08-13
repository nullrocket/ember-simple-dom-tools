import {test} from 'ember-qunit';
import {select, create, append, height, empty,DIMENSION_OPTIONS} from 'ember-simple-dom-tools';


test("height function exists", function ( assert ) {
  assert.ok(height);
});


test("Height Tests", function ( assert ) {

  empty(document.getElementById('ember-testing'));
  let fixture = document.getElementById('ember-testing');
  let testDom = `
    <div id="first" style="width:200px;height:200.5px;"></div>
    <p class="article-p" style="height:200cm"></p><p class="article-p"></p><p class="article-p"></p>
    `;
  append(create(testDom), fixture);
  assert.strictEqual(height(select('#firstx',fixture)),undefined, "Get height of single element");
  assert.strictEqual(height([undefined,undefined]),undefined, "Get height of single element");
  assert.strictEqual(height(select('#first',fixture)), 200.5, "Get height of single element");
  assert.strictEqual(height(select('#first',fixture), '200px'), 200, "Get height of single element");
  assert.strictEqual(height(select('#first',fixture)), 200, "Check changed height");
  assert.strictEqual(height(select('#first',fixture),500), 500, "Check changed height");


});

test("Heights Tests", function ( assert ) {

  empty(document.getElementById('ember-testing'));
  let fixture = document.getElementById('ember-testing');
  let testDom = `
    <div id="first" style="width:200px;height:200.5px;"></div>
    <p class="article-p" style="height:200cm"></p><p class="article-p"></p><p class="article-p"></p>
    `;
  append(create(testDom), fixture);

  assert.deepEqual(height(select('#first',fixture),DIMENSION_OPTIONS.RETURN_ARRAY), [200.5], "Get height of single element");
  assert.deepEqual(height(select('#first',fixture), '200px',DIMENSION_OPTIONS.RETURN_ARRAY), [200], "Get height of single element");
  assert.deepEqual(height(select('#first',fixture),DIMENSION_OPTIONS.RETURN_ARRAY), [200], "Check changed height");
  assert.deepEqual(height(select('#first',fixture),500,DIMENSION_OPTIONS.RETURN_ARRAY,DIMENSION_OPTIONS.SET_ALL), [500], "Check changed height");

 assert.deepEqual(height(select('.article-p',fixture),500,DIMENSION_OPTIONS.RETURN_ARRAY,DIMENSION_OPTIONS.SET_ALL), [500,500,500], "Check changed height");
});
