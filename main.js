define(['exports',
        './lib/request',
        'url'],
function(exports, Request, uri) {

  function request(url, method, cb) {
    var headers;
    
    if (typeof url == 'object') {
      var opts = url;
      cb = method;
      method = opts.method || 'GET';
      url = uri.format(opts);
      headers = opts.headers;
    } else if (typeof method == 'function') {
      cb = method;
      method = 'GET';
    }
    
    var req = new Request(url, method);
    if (headers) {
      for (var name in headers) {
        req.setHeader(name, headers[name]);
      }
    }
    if (cb) req.on('response', cb);
    return req;
  }

  function get(url, cb) {
    var req = request(url, cb);
    req.end();
    return req;
  }

  exports.request = request;
  exports.get = get;
});
