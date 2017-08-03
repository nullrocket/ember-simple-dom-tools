module.exports = {
  "scenarios": [
    {
      name: 'ember-lts-2.8',
      bower: {
        dependencies: {
          'ember': 'components/ember#lts-2-4'
        },
        resolutions: {
          'ember': 'lts-2-8'
        }
      },
      npm: {
        devDependencies: {
          'ember-source': null
        }
      }
    },
    {
      name: 'ember-lts-2.12',
      bower: {
        dependencies: {
          'ember': 'components/ember#lts-2-12'
        },
        resolutions: {
          'ember': 'lts-2-12'
        }
      },
      npm: {
        devDependencies: {
          'ember-source': null
        }
      }
    },
  {
    "name": "default",
    "bower": {
      "dependencies": {}
    }
  },
  {
    "name": "ember-release",
    "bower": {
      "dependencies": {
        "ember": "release"
      }
    }
  },
  {
    "name": "ember-beta",
    "bower": {
      "dependencies": {
        "ember": "beta"
      }
    }
  },
  {
    "name": "ember-canary",
    "bower": {
      "dependencies": {
        "ember": "canary"
      }
    }
  }
]

};
