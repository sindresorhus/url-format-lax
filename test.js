import test from 'ava';
import fn from './';

test(t => {
	t.is(fn({host: 'google.com', port: '123'}), 'google.com:123');
	t.is(fn({host: 'google.com', port: 123}), 'google.com:123');
	t.is(fn({host: 'google.com'}), 'google.com');
	t.is(fn({host: '::', port: '123'}), '[::]:123');
	t.is(fn({host: '::'}), '[::]');
	t.is(fn({protocol: 'https', host: 'google.com'}), 'google.com');
	t.is(fn({host: 'google.com', pathname: '/path'}), 'google.com');
});
