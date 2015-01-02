'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.crawl = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  sitemapExists: function(test) {
    test.expect(1);

    test.ok(grunt.file.exists('tmp/sitemap.xml'), 'Found sitemap.xml: tmp/sitemap.xml');

    test.done();
  },
  simpleContentExists: function(test) {
    test.expect(4);

    test.ok(grunt.file.exists('tmp/static/index.html'), 'Found static content: tmp/static/index.html');
    test.ok(grunt.file.exists('tmp/static/about.html'), 'Found static content: tmp/static/about.html');
    test.ok(grunt.file.exists('tmp/static/people/me.html'), 'Found static content: tmp/static/people/me.html');
    test.ok(!grunt.file.exists('tmp/static/page.html'), 'Did not find content: tmp/static/page.html');

    test.done();
  },

};