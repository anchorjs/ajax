define(['exports',
        './lib/request'],
function(exports, Request) {

  // TODO: Implment options version of fn signature.
  function request(url, method, callback) {
    if (typeof method == 'function') {
      callback = method;
      method = 'GET';
    }
    
    var req = new Request(url, method);
    if (callback) req.on('response', callback);
    return req;
  }

  function get(url, callback) {
    var req = request(url, 'GET', callback);
    req.end();
    return req;
  }


  exports.request = request;
  exports.get = get;
});
