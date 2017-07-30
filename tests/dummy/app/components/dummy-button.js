import Ember from 'ember';
import layout from '../templates/components/dummy-button';
import select from "ember-simple-dom-tools/select";
import create from 'ember-simple-dom-tools/create';
import append from 'ember-simple-dom-tools/append';
import height from 'ember-simple-dom-tools/height';
import width from "ember-simple-dom-tools/width";
import dom from "ember-simple-dom-tools";
import {outerHeight} from "ember-simple-dom-tools";
export default Ember.Component.extend({
  layout,
  didInsertElement(){
    console.log('dom.select',dom.select('body'));
    console.log('dom.select',dom.select('html'));
    console.log('dom.select',dom.select('head'));
    console.log('dom.select',dom.select('script',dom.select('head')[0]));
    console.log('outerHeight',outerHeight(select('body')))
    console.log(select('body'));
    let someNodes = create('<div>bob</div><div>Joe</div>');
    console.log(someNodes);
    append(someNodes,this.get('element'));
  //   someNodes = create('<div>bob</div><div>Joe</div>');
    console.log(someNodes);
    append(someNodes,this.get('element'));
    var somethingElse = create('<div>')
    somethingElse[0].style.background = "blue";
    width(somethingElse[0], "100px");
    height(somethingElse[0], "100px");

    console.log('somethingelse',somethingElse[0])
    somethingElse = append(somethingElse,this.get('element'));
    console.log('somethingelse after append',somethingElse);
    console.log(height(somethingElse));
    height(somethingElse[0], '400px');
    console.log('height after setting it ',height(somethingElse[0]));
    let input = document.createElement('input');
    console.log('input',input);
    let input2 = create('<input>');
    append(input,this.get('element'));
    append(input2,this.get('element'));
    console.log('outerHeight',outerHeight(select('body')))
  }

});
