define(['ajax/main',
        'chai'],
function(ajax, chai) {
  var expect = chai.expect;

  describe("ajax", function() {
    
    it('shoud export request', function() {
      expect(ajax.request).to.exist;
      expect(ajax.request).to.be.a('function');
    });
    
    it('shoud export get', function() {
      expect(ajax.get).to.exist;
      expect(ajax.get).to.be.a('function');
    });
    
  });
  
  return { name: "test.ajax" }
});
