import Ember from 'ember';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';
import selector from 'ember-simple-dom-tools';
import stuff from 'ember-simple-dom-tools/select';
console.log(selector());
console.log(stuff());
let App;


App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

loadInitializers(App, config.modulePrefix);

export default App;
