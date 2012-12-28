require.config({
  baseUrl: 'js/lib',
  paths: {
    'test': '../../..',
    'mocha': 'mocha/mocha',
    'chai': 'chai/chai'
  },
  packages: [
    { name: 'ajax', location: '../../../..' },
    { name: 'events' },
    { name: 'url' },
    { name: 'mocha-cloud', location: '../support', main: 'mocha-cloud' }
  ],
  shim: {
    'mocha': {
      exports: 'mocha'
    }
  }
});

require(['../suite']);
