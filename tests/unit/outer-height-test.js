
import { test  } from 'ember-qunit';
import {select, create, append, outerHeight, height,empty,DIMENSION_OPTIONS} from 'ember-simple-dom-tools';
test("outerHeight function exists", function(assert){
  assert.ok(outerHeight);
});

test('OuterHeight test docs',function(assert){
  empty(document.getElementById('ember-testing'));
  let fixture = document.getElementById('ember-testing');
  let testDom = `
  <div class="content" style="height:500px;border:1px solid black;padding:24px;box-sizing:content-box;background:red;" >
    <p class="intro" style="height:500px;border:1px;" > </p>
    <p class="intro" style="height:500px;border:1px;" ></p>
    <p class="intro" style="height:500px;border:1px;" ></p>
  </div>`;
  append(create(testDom), fixture);

  let contentDom = select('.content',fixture);
  let paragraphDom = select('p',fixture);
  assert.strictEqual(outerHeight(contentDom),502, "Get outerHeight of single element");
  assert.strictEqual(height(contentDom),502, "Get outerHeight of single element");
  //assert.deepEqual(outerHeight(contentDom,DIMENSION_OPTIONS.RETURN_ARRAY),[ 502 ], "Get outerHeight of single element as an array");

 // assert.strictEqual(outerHeight(paragraphDom), 502, "Get outerHeight of multiple elements, return first value only");
 // assert.deepEqual(outerHeight(paragraphDom, DIMENSION_OPTIONS.RETURN_ARRAY), [502,502,502], "Get outerHeight of multiple elements as an array");
 // assert.strictEqual(outerHeight(contentDom,600), 602, "Set outerHeight of a single element");
 // assert.deepEqual(outerHeight(contentDom,700,DIMENSION_OPTIONS.RETURN_ARRAY), [702], "Set outerHeight of a single element return an array");
 // assert.deepEqual(outerHeight(paragraphDom,700), 702, "Set outerHeight of an array of elements, return single value");
 // assert.deepEqual(outerHeight(paragraphDom,800,DIMENSION_OPTIONS.RETURN_ARRAY), [802,802,802], "Set outerHeight of an array of elements, return array");



});