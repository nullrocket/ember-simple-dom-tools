/* eslint-env node */
'use strict';

let path = require('path');
let replace = require('broccoli-string-replace');
let mergeTrees = require('broccoli-merge-trees');
let Funnel = require('broccoli-funnel');
let BroccoliDebug = require('broccoli-debug');

module.exports = {
  name: 'ember-simple-dom-tools',

  init(app) {
    this._super.init && this._super.init.apply(this, arguments);

    this._debugTree = BroccoliDebug.buildDebugCallback('ember-simple-dom-tools');

  },
  included(app){
    if ( typeof app.import !== 'function' && app.app ) {
      app = app.app;
    }
    this.srcPath = app.options['ember-simple-dom-tools']['directory'] || path.dirname(require.resolve('ember-simple-dom-tools/src'));
  },
  _shouldCompileJS() {
    return true;
  },

    treeForAddon(tree) {

      let newTree = this._debugTree(this.srcPath, 'input');
      newTree = new Funnel(newTree);



      if (tree) {
        tree = mergeTrees([newTree, tree], {
          overwrite: true
        });
      } else {
        tree = newTree;
      }
      return this._super.treeForAddon.call(this, tree);
    }

};