define(['ajax'],
function(ajax) {

  describe("ajax", function() {
    
    it('should export request', function() {
      expect(ajax.request).to.exist;
      expect(ajax.request).to.be.a('function');
    });
    
    it('should export get', function() {
      expect(ajax.get).to.exist;
      expect(ajax.get).to.be.a('function');
    });
    
  });
  
  return { name: "test.ajax" }
});
