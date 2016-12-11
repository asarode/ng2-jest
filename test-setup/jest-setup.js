// Have to patch jsdom to support zones. Used jsdom's PR #1610
// (https://github.com/tmpvar/jsdom/pull/1610/files) but I'm not sure if this
// patch sufficiently solves the jsdom + zones interop problem. Without this
// patch, running jest throws:
// TypeError: Cannot set property onreadystatechange of [object Object] which has only a getter
//   at new XMLHttpRequest (node_modules/jsdom/lib/jsdom/living/xmlhttprequest.js:156:31)
var jsdom = require('./jsdom-zone-patch');

var document = jsdom.jsdom('<!doctype html><html><body></body></html>');

var window = document.defaultView;

global.document = document;
global.HTMLElement = window.HTMLElement;
global.XMLHttpRequest = window.XMLHttpRequest;

require('core-js/es7/reflect');
require('zone.js/dist/zone');
require('zone.js/dist/long-stack-trace-zone');
require('zone.js/dist/async-test');
require('zone.js/dist/fake-async-test');
require('zone.js/dist/sync-test');
require('zone.js/dist/proxy');
require('zone.js/dist/jasmine-patch');

var testing = require('@angular/core/testing');
var browser = require('@angular/platform-browser-dynamic/testing');

testing.TestBed.initTestEnvironment(
  browser.BrowserDynamicTestingModule,
  browser.platformBrowserDynamicTesting()
);

Error.stackTraceLimit = Infinity;
jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
