
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
  assert.strictEqual(width(contentDom),500, "Get width of single element");
  assert.deepEqual(width(contentDom,DIMENSION_OPTIONS.RETURN_ARRAY),[ 500 ], "Get width of single element as an array");

  assert.strictEqual(width(paragraphDom), 500, "Get width of multiple elements, return first value only");
  assert.deepEqual(width(paragraphDom, DIMENSION_OPTIONS.RETURN_ARRAY), [500,500,500], "Get width of multiple elements as an array");
  assert.strictEqual(width(contentDom,600), 600, "Set width of a single element");
  assert.deepEqual(width(contentDom,700,DIMENSION_OPTIONS.RETURN_ARRAY), [700], "Set width of a single element return an array");
  assert.deepEqual(width(paragraphDom,700), 700, "Set width of an array of elements, return single value");
  assert.deepEqual(width(paragraphDom,800,DIMENSION_OPTIONS.RETURN_ARRAY), [800,800,800], "Set width of an array of elements, return array");



});
test("Get widths", function ( assert ) {

  empty(document.getElementById('ember-testing'));
  let fixture = document.getElementById('ember-testing');
  let testDom = `
  <div id="first" style="width:200px"></div>
`;
  append(create(testDom), fixture);
    //console.log('select',select('#first'));
 // console.log(width(select('#first')));
  assert.strictEqual(width(select('#first')),200, "Get width of single element");


});