import {Url, format as internalFormatUrl} from 'url';

export default function urlFormat(url) {
	if (typeof url !== 'object') {
		throw new TypeError('Expected an object');
	}

	const newUrl = new Url();
	newUrl.hostname = url.hostname || url.host;
	newUrl.port = url.port;

	return internalFormatUrl(newUrl).replace(/^\/\//, '');
}
