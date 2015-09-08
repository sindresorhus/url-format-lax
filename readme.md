# url-format-lax [![Build Status](https://travis-ci.org/sindresorhus/url-format-lax.svg?branch=master)](https://travis-ci.org/sindresorhus/url-format-lax)

> Lax [`url.format()`](https://nodejs.org/docs/latest/api/url.html#url_url_format_urlobj)


## Install

```
$ npm install --save url-format-lax
```


## Usage

```js
var urlFormatLax = require('url-format-lax');

urlFormatLax({host: 'google.com', port: '123'});
//=> 'google.com:123'
```

And with the builtin `url.format()`:

```js
var url = require('url');

url.format({host: 'google.com', port: '123'});
//=> '//google.com'
```


## Related

- [url-parse-lax](https://github.com/sindresorhus/url-parse-lax) - `url.parse()` with support for protocol-less URLs & IPs


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
