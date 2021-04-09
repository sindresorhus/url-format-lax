# url-format-lax

> Lax [`url.format()`](https://nodejs.org/docs/latest/api/url.html#url_url_format_urlobj) that formats a hostname and port into IPv6-compatible socket form of `hostname:port`

## Install

```
$ npm install url-format-lax
```

## Usage

```js
import urlFormat from 'url-format-lax';

urlFormat({hostname: '::1', port: '123'});
//=> '[::1]:123'

urlFormat({protocol: 'https', hostname: 'google.com', port: '123'});
//=> 'google.com:123'
```

And with the builtin `url.format()`:

```js
import url from 'url';

url.format({hostname: '::1', port: '123'});
//=> '//[::1]:123'

url.format({protocol: 'https', hostname: 'google.com', port: '123'});
//=> 'https://google.com:123'
```

## Related

- [url-parse-lax](https://github.com/sindresorhus/url-parse-lax) - Lax `url.parse()` with support for protocol-less URLs & IPs
