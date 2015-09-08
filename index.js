'use strict';
var url = require('url');

module.exports = function (x) {
	if (x.host && x.port) {
		x.hostname = x.host;
		delete x.host;
	}

	return url.format(x).replace(/^\/\//, '');
};
