import {test} from 'ember-qunit';
import {select, create, append} from 'ember-simple-dom-tools';

test("select function exists", function ( assert ) {
  assert.ok(select);
});

test("ID Selection", function ( assert ) {
  assert.expect(25);
  let fixture = document.getElementById('ember-testing');
  let testDom = `
    <ul id="first"></ul>
    <div id="firstp">
      <div id="simon1"></div>
    </div>
    <form id="台北Táiběi">
      <div id="台北"></div>
    </form>
    <form>
      <div id="foo:bar"></div>
    </form>
    <form>
      <div id="test.foo[5]bar"></div>
    </form>
    <form id="form">
      <div id="radio1"></div>
    </form>
    <div id="foo">
      <div id="sndp"></div>
      <div id="en"></div>
      <div id="sap"></div>
    </div>
    <ul id="firstUL"></ul>
    <a id="backslash\\foo"></a>
    <form id="lengthtest">
      <input name="id">
    </form>
    <div id="foobar"></div>
    <div id="types_all"></div>
    <div id="types-all"></div>
    <div id="types+plus"></div>`;
  append(create(testDom), fixture);
  //console.log(select('#ember-testing'));
  assert.equal(select('#ember-testing').length,1, "Selects a single element");
  assert.equal(select('ul#first').length,1, "ID selector with element selector");
  assert.equal(select('#firstp #simon1').length, 1, "ID selector with existing ID descendant");
  assert.equal(select('#firstp #foobar').length, 0, "ID selector with non-existent ID descendant");
  assert.equal(select('#台北Táiběi').length, 1, "ID selector using UTF8");
  assert.equal(select('#台北Táiběi, #台北').length, 2, "ID selector using UTF8");
  assert.equal(select('div #台北').length, 1, "Descendant ID selector using UTF8");
  assert.equal(select('form > #台北').length, 1, "Child ID selector using UTF8");
  assert.equal(select('#foo\\:bar').length, 1, "Escaped ID Selector");
  assert.equal(select('#test\\.foo\\[5\\]bar').length, 1, "Escaped ID Selector");
  assert.equal(select('div #foo\\:bar').length, 1, "Descendant Escaped ID Selector");
  assert.equal(select('div #test\\.foo\\[5\\]bar').length, 1, "Descendant escaped ID");
  assert.equal(select('form > #foo\\:bar').length, 1, "Child escaped ID");
  assert.equal(select('form > #test\\.foo\\[5\\]bar').length, 1, "Child escaped ID");
  assert.equal(select('#form > #radio1').length, 1, "ID Selector, child ID present");
  assert.equal(select('#form > #first').length, 0, "ID Selector, not an ancestor ID");
  assert.equal(select('#form > #option1a').length, 0, "ID Selector, not a child ID");
  assert.equal(select('#foo > *').length, 3, "All Children of ID");
  assert.equal(select('#firstUL > *').length, 0, "All Children of ID with no children");
  assert.equal(select('#backslash\\\\foo').length, 1, "ID Selector contains backslash");
  assert.equal(select('#lengthtest').length, 1, "ID Selector on Form with an input that has a name of 'id'");
  assert.equal(select('#asdfasdf #foobar').length, 0, "ID selector with non-existent ancestor");
  assert.equal(select('#types_all').length, 1, "ID selector with underscore characters in it");
  assert.equal(select('#types-all').length, 1, "ID selector with dash characters in it");
  assert.equal(select('#types\\+plus').length, 1, "ID selector with plus characters in it");


});