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
  };
  
  Response.prototype._progress = function(e) {
    if (e.lengthComputable) {
      this.emit('progress', e.loaded, e.total);
    }
  };
  
  Response.prototype._end = function(xhr) {
    this.status =
    this.statusCode = xhr.status;
    
    // Workaround bug in IE which incorrectly returns a status code of 1223 when
    // the response status code is 204.
    //
    // Details:
    //   http://blogs.msdn.com/b/ieinternals/archive/2009/07/23/the-ie8-native-xmlhttprequest-object.aspx
    //   http://bugs.jquery.com/ticket/1450
    if (xhr.status == 1223) this.statusCode = 204;
    
    // TODO: set this.response
    this.responseText = xhr.responseText;
    this.responseXML = xhr.responseXML;
    this.emit('end');
  };
  
  return Response;
});
