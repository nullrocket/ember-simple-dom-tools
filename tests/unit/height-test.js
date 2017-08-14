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


test('Height test docs',function(assert){
  empty(document.getElementById('ember-testing'));
  let fixture = document.getElementById('ember-testing');
  let testDom = `
  <div class="content" style="height:500px" >
    <p class="intro" style="height:500px" > </p>
    <p class="intro" style="height:500px" ></p>
    <p class="intro" style="height:500px" ></p>
  </div>`;
  append(create(testDom), fixture);

  let contentDom = select('.content',fixture);
  let paragraphDom = select('p',fixture);
  assert.strictEqual(height(contentDom),500, "Get height of single element");
  assert.deepEqual(height(contentDom,DIMENSION_OPTIONS.RETURN_ARRAY),[ 500 ], "Get height of single element as an array");

  assert.strictEqual(height(paragraphDom), 500, "Get height of multiple elements, return first value only");
  assert.deepEqual(height(paragraphDom, DIMENSION_OPTIONS.RETURN_ARRAY), [500,500,500], "Get height of multiple elements as an array");
  assert.strictEqual(height(contentDom,600), 600, "Set height of a single element");
  assert.deepEqual(height(contentDom,700,DIMENSION_OPTIONS.RETURN_ARRAY), [700], "Set height of a single element return an array");
  assert.deepEqual(height(paragraphDom,700), 700, "Set height of an array of elements, return single value");
  assert.deepEqual(height(paragraphDom,800,DIMENSION_OPTIONS.RETURN_ARRAY), [800,800,800], "Set height of an array of elements, return array");



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
