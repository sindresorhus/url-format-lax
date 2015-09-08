'use strict';
var test = require('ava');
var fn = require('./');

test(function (t) {
	t.is(fn({host: 'google.com', port: '123'}), 'google.com:123');
	t.is(fn({host: '::', port: '123'}), '[::]:123');
	t.is(fn({protocol: 'http:', host: 'google.com'}), 'http://google.com');
	t.end();
});
