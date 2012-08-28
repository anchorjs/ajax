define(['events',
        'class'],
function(Emitter, clazz) {
  
  function Response() {
    Emitter.call(this);
    this._offset = 0;
  }
  clazz.inherits(Response, Emitter);
  
  Response.prototype._data = function(xhr) {
    if (xhr.responseText.length > this._offset) {
      this.emit('data', xhr.responseText.slice(this._offset));
      this._offset = xhr.responseText.length;
    }
  }
  
  Response.prototype._end = function(xhr) {
    this.statusCode = xhr.status;
    // http://blogs.msdn.com/b/ieinternals/archive/2009/07/23/the-ie8-native-xmlhttprequest-object.aspx
    if (xhr.status == 1223) this.statusCode = 204;
    this.responseText = xhr.responseText;
    this.responseXML = xhr.responseXML;
    this.emit('end');
  };
  
  return Response;
});
