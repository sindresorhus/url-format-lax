'use strict';
var url = require('url');

module.exports = function (x) {
	if (typeof x !== 'object') {
		throw new TypeError('Expected an object');
	}

	var u = new url.Url();
	u.hostname = x.hostname || x.host;
	u.port = x.port;

	return url.format(u).replace(/^\/\//, '');
};
