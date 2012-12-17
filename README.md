## Tests

Tests for Anchor/Ajax are executed using [Mocha](http://visionmedia.github.com/mocha/)
as a test framework with [Chai](http://chaijs.com/) assertions.

##### Dependencies

Prior to running tests, use [volo](https://github.com/volojs/volo) to fetch
dependencies for both the module and tests from GitHub.

    $ volo add
    $ cd tests
    $ volo add

##### Browser

To run tests in a browser, open _runner.html_:

    $ make test-browser

##### PhantomJS

To run headless tests from a terminal using [PhantomJS](http://phantomjs.org/):

    $ make test-phantomjs
