define(['require',
        'mocha',
        'chai',
        'mocha-cloud'],
function(require, mocha, chai, cloud) {
  mocha.setup('bdd');
  expect = chai.expect
  
  require(['test/ajax.test'],
  function() {
    if (window.mochaPhantomJS) { mochaPhantomJS.run(); }
    else { cloud(mocha.run()); }
  });
});
