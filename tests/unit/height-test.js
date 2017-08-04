import {test} from 'ember-qunit';
import {select, create, append, height, empty} from 'ember-simple-dom-tools';

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
  console.log("hmm",height(select('p',fixture)));
  assert.strictEqual(height(select('#first',fixture)), 200.5, "Get height of single element");
  assert.strictEqual(height(select('#first',fixture), '200px'), 200, "Get height of single element");
  console.log('returned value', height(select('#first',fixture)));
  assert.strictEqual(height(select('#first',fixture)), 200, "Check changed height");


});