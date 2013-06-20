require.config({
  baseUrl: 'js/lib',
  paths: {
    'test': '../../..',
    'mocha': 'mocha/mocha',
    'chai': 'chai/chai'
  },
  packages: [
    { name: 'ajax', location: '../../../..', main: 'ajax' },
    { name: 'xhr' },
    { name: 'events' },
    { name: 'url' }
  ],
  shim: {
    'mocha': {
      exports: 'mocha'
    }
  }
});

require(['../suite']);
