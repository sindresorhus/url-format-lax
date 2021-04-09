import test from 'ava';
import urlFormat from './index.js';

test('main', t => {
	t.is(urlFormat({host: 'google.com', port: '123'}), 'google.com:123');
	t.is(urlFormat({host: 'google.com', port: 123}), 'google.com:123');
	t.is(urlFormat({host: 'google.com'}), 'google.com');
	t.is(urlFormat({host: '::', port: '123'}), '[::]:123');
	t.is(urlFormat({host: '::'}), '[::]');
	t.is(urlFormat({protocol: 'https', host: 'google.com'}), 'google.com');
	t.is(urlFormat({host: 'google.com', pathname: '/path'}), 'google.com');
});
