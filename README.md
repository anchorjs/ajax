# Anchor/Ajax

The ajax module implements support for making HTTP requests using XHR.

This module is functionally identical to [xhr](https://github.com/anchorjs/xhr),
extended to support an `options` object as the first argument to `request()`.
The options take the same form as Node's [HTTP](http://nodejs.org/api/http.html)
module.  For modules that don't need this functionality, it is recommended to use
xhr directly, in order to minimize the number of dependencies.

## Install

##### component

    $ component install anchorjs/ajax

##### volo

    $ volo add anchorjs/ajax

## Usage

`ajax.request()` returns an instance of `Request`.  If one needs to upload data
with a POST request:

```javascript
var req = ajax.request('/upload', 'POST', function(res) {
  res.on('end', function() {
    console.log('STATUS: ' + res.statusCode);
    console.log('HEADERS: ' + JSON.stringify(res.headers));
    console.log('BODY: ' + res.responseText);
  });
});

req.on('error', function(e) {
  console.log('problem with request: ' + e.message);
});

req.send('data\n');
```

Since most requests are GET requests without bodies, Anchor provides `get()` as
a convenience method.  The only difference between this method and `ajax.request()`
is that it sets the method to GET and calls `req.send()` automatically.

```javascript
ajax.get("/user.json", function(res) {
  console.log("Got response: " + res.statusCode);
}).on('error', function(e) {
  console.log("Got error: " + e.message);
});
```

## Compatibility

##### component

This module uses the [AMD](https://github.com/amdjs/amdjs-api) format.  To
include in component builds, use [component-amd](https://github.com/jaredhanson/component-amd):

    component build -u component-amd

## Tests

To run tests in a browser, execute the Make target for the desired browser:

    $ make test-chrome
    $ make test-firefox
    $ make test-safari
    
Headless tests can be executed directly from a terminal:
    
    $ make test-phantomjs

## Credits

  - [Jared Hanson](http://github.com/jaredhanson)

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2012-2013 Jared Hanson <[http://jaredhanson.net/](http://jaredhanson.net/)>
