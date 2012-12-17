BROWSER = open
PHANTOMJS = phantomjs
JSHINT = jshint

SOURCES = *.js lib/*.js


test: test-phantomjs

test-browser:
	$(BROWSER) tests/runner.html

test-phantomjs:
	$(PHANTOMJS) tests/vendor/phantomjs-mocha/scripts/mocha.js tests/runner/phantomjs.html

hint: lint
lint:
	$(JSHINT) $(SOURCES)

.PHONY: test-browser test-phantomjs
