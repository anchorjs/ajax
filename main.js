define(['exports',
        './lib/request'],
function(exports, Request) {

  // TODO: Implement options version of fn signature.
  function request(url, method, cb) {
    if (typeof method == 'function') {
      cb = method;
      method = 'GET';
    }
    
    var req = new Request(url, method);
    if (cb) req.on('response', cb);
    return req;
  }

  function get(url, cb) {
    var req = request(url, 'GET', cb);
    req.end();
    return req;
  }


  exports.request = request;
  exports.get = get;
});
