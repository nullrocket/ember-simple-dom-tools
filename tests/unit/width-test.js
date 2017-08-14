
import { test  } from 'ember-qunit';
import {select, create, append,width,empty,DIMENSION_OPTIONS} from 'ember-simple-dom-tools';

test("width function exists", function(assert){
  assert.ok(width);
});

test('Width test docs',function(assert){
  empty(document.getElementById('ember-testing'));
  let fixture = document.getElementById('ember-testing');
  let testDom = `
  <div class="content" style="width:500px" >
    <p class="intro" style="width:500px" > </p>
    <p class="intro" style="width:500px" ></p>
    <p class="intro" style="width:500px" ></p>
  </div>`;
  append(create(testDom), fixture);

  let contentDom = select('.content',fixture);
  let paragraphDom = select('p',fixture);

  var widthValue = width(contentDom);
  assert.strictEqual(widthValue,500, "Get width of single element");

  widthValue = width(contentDom,DIMENSION_OPTIONS.RETURN_ARRAY);
  assert.deepEqual(widthValue,[ 500 ], "Get width of single element as an array");

  widthValue = width(paragraphDom);
  assert.strictEqual(widthValue, 500, "Get width of multiple elements, return first value only");

  widthValue = width(paragraphDom, DIMENSION_OPTIONS.RETURN_ARRAY);
  assert.deepEqual( widthValue, [500,500,500], "Get width of multiple elements as an array");

  widthValue = width(contentDom,600);
  assert.strictEqual(widthValue, 600, "Set width of a single element");

  widthValue = width(contentDom,700,DIMENSION_OPTIONS.RETURN_ARRAY);
  assert.deepEqual(widthValue, [700], "Set width of a single element return an array");

  widthValue = width(paragraphDom,700);
  assert.deepEqual(widthValue, 700, "Set width of an array of elements, return single value");

  widthValue = width(paragraphDom,800,DIMENSION_OPTIONS.RETURN_ARRAY);
  assert.deepEqual(widthValue, [800,800,800], "Set width of an array of elements, return array");



});
