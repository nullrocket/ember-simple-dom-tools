
import { test  } from 'ember-qunit';
import {select,create,append} from 'ember-simple-dom-tools';

test("select function exists", function(assert){
  assert.ok(select);


});

test("ID Selection",function(assert){
  assert.expect(14);
  let fixture = document.getElementById('ember-testing');


  assert.ok(select('#ember-testing')[0] instanceof HTMLDivElement,"Selects a single element");
  append(create('<ul id="first"></ul>'),fixture);
  assert.ok(select('ul#first')[0] instanceof HTMLUListElement,"ID Selector w/ Element");
  append(create('<div id="firstp"><div id="simon1"></div></div>'),fixture);
  assert.equal(select('#firstp #simon1').length,1, "ID selector with existing ID descendant");
  assert.equal(select('#firstp #foobar').length,0, "ID selector with non-existent ID descendant");
  append(create('<form id="台北Táiběi"><div id="台北"></div></form>'),fixture);
  assert.equal(select('#台北Táiběi').length,1, "ID selector using UTF8");

  assert.equal(select('#台北Táiběi, #台北').length,2, "ID selector using UTF8");
  assert.equal(select('div #台北').length,1, "Descendant ID selector using UTF8");
  assert.equal(select('form > #台北').length,1, "Child ID selector using UTF8");
  append(create('<form><div id="foo:bar"></div></form>'),fixture);
  assert.equal(select('#foo\\:bar').length,1, "Escaped ID Selector");
  append(create('<form><div id="test.foo[5]bar"></div></form>'),fixture);
  assert.equal(select('#test\\.foo\\[5\\]bar').length,1, "Escaped ID Selector");
  assert.equal(select('div #foo\\:bar').length,1, "Descendant Escaped ID Selector");
  assert.equal(select('div #test\\.foo\\[5\\]bar').length,1, "Escaped ID Selector");
  assert.equal(select('form > #foo\\:bar').length,1, "Escaped ID Selector");
  assert.equal(select('form > #test\\.foo\\[5\\]bar').length,1, "Escaped ID Selector");
  /*


 // assert.t( "ID Selector w/ Element", "ul#first", [] );
  //assert.t( "ID selector with existing ID descendant", "#firstp #simon1", [ "simon1" ] );
  //assert.t( "ID selector with non-existent descendant", "#firstp #foobar", [] );
  //assert.t( "ID selector using UTF8", "#台北Táiběi", [ "台北Táiběi" ] );
  //assert.t( "Multiple ID selectors using UTF8", "#台北Táiběi, #台北", [ "台北Táiběi", "台北" ] );
  //assert.t( "Descendant ID selector using UTF8", "div #台北", [ "台北" ] );
 // assert.t( "Child ID selector using UTF8", "form > #台北", [ "台北" ] );

 // assert.t( "Escaped ID", "#foo\\:bar", [ "foo:bar" ] );
  //assert.t( "Escaped ID", "#test\\.foo\\[5\\]bar", [ "test.foo[5]bar" ] );
  //assert.t( "Descendant escaped ID", "div #foo\\:bar", [ "foo:bar" ] );
  //assert.t( "Descendant escaped ID", "div #test\\.foo\\[5\\]bar", [ "test.foo[5]bar" ] );
 // assert.t( "Child escaped ID", "form > #foo\\:bar", [ "foo:bar" ] );
  //assert.t( "Child escaped ID", "form > #test\\.foo\\[5\\]bar", [ "test.foo[5]bar" ] );

  assert.t( "ID Selector, child ID present", "#form > #radio1", [ "radio1" ] ); // bug #267
  assert.t( "ID Selector, not an ancestor ID", "#form #first", [] );
  assert.t( "ID Selector, not a child ID", "#form > #option1a", [] );

  assert.t( "All Children of ID", "#foo > *", [ "sndp", "en", "sap" ] );
  assert.t( "All Children of ID with no children", "#firstUL > *", [] );

  a = jQuery( "<a id='backslash\\foo'></a>" ).appendTo( "#qunit-fixture" );
  assert.t( "ID Selector contains backslash", "#backslash\\\\foo", [ "backslash\\foo" ] );

  assert.t( "ID Selector on Form with an input that has a name of 'id'", "#lengthtest", [ "lengthtest" ] );

  assert.t( "ID selector with non-existent ancestor", "#asdfasdf #foobar", [] ); // bug #986

  assert.t( "Underscore ID", "#types_all", [ "types_all" ] );
  assert.t( "Dash ID", "#qunit-fixture", [ "qunit-fixture" ] );

  assert.t( "ID with weird characters in it", "#name\\+value", [ "name+value" ] );
*/
});