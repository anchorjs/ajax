define(['./response',
        './errors/ajaxerror',
        'events',
        'class'],
function(Response, AjaxError, Emitter, clazz) {
  
  function Request(url, method) {
    Emitter.call(this);
    this.url = url;
    this.method = method || 'GET';
    this._xhr = null;
    this._mime = null;
    this._aborting = false;
  }
  clazz.inherits(Request, Emitter);
  
  Request.prototype.send = function(data) {
    var self = this
      , xhr = new XMLHttpRequest()
      , res;
    
    this._xhr = xhr;
    if (this._mime) { xhr.overrideMimeType(this._mime); }
    
    xhr.open(this.method, this.url, true);
    xhr.onreadystatechange = function(e) {
      switch (xhr.readyState) {
        case 0:  // UNSENT
          break;
        case 1:  // OPEN
          self.emit('open');
          break;
        case 2:  // HEADERS_RECEIVED
          res = new Response();
          self.emit('response', res);
          break;
        case 3:  // LOADING
          res._data(xhr);
          break;
        case 4:  // DONE
          if (res) {
            res._end(xhr);
          } else if (self._aborting) {
            self.emit('abort');
          } else {
            self.emit('error', new AjaxError('Failed to load', xhr.status, xhr.statusText));
          }
          xhr.onreadystatechange = noop;
          break;
      }
    };
    
    xhr.send(data);
  };
  
  Request.prototype.overrideMimeType = function(mime) {
    this._mime = mime;
  };
  
  Request.prototype.abort = function() {
    this._aborting = true;
    this._xhr.abort();
  };
  
  function noop() {}
  
  return Request;
});
