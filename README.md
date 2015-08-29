# [get-last-value][author-www-url] [![npmjs.com][npmjs-img]][npmjs-url] [![The MIT License][license-img]][license-url] 

> Lookup an object recursively for given property and get it's value.

[![code climate][codeclimate-img]][codeclimate-url] [![standard code style][standard-img]][standard-url] [![travis build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![dependency status][david-img]][david-url]


## Install
```
npm i get-last-value --save
```


## Usage
> For more use-cases see the [tests](./test.js)

```js
var getLastValue = require('get-last-value')

getLastValue({foo: 'bar', baz: 'qux'}, 'foo') //=> 'bar'
getLastValue({foo: 'bar', baz: 'qux'}, 'baz') //=> 'qux'

var obj = {
  a: 111,
  e: 555,
  u: undefined,
  b: {
    w: {
      f: false,
      d: 'ddd'
    },
    e: 'eee',
    c: {
      a: 222,
      e: null
    }
  },
  d: {
    a: 333
  }
}

getLastValue(obj, 'a') //=> 333
getLastValue(obj, 'c') //=> { a: 222, e: null }
getLastValue(obj, 'd') //=> { a: 333 }
getLastValue(obj, 'f') //=> false
getLastValue(obj, 'e') //=> null
getLastValue(obj, 'u') //=> undefined
getLastValue(obj, 'w') //=> { f: false, d: 'ddd' }
getLastValue(obj, 'foo') //=> undefined
```


## Related
- [assign-value](https://github.com/jonschlinkert/assign-value): Extend a value or deeply nested property of an object using dot notation
- [upsert-value](https://github.com/doowb/upsert-value): Update or set nested values and any intermediaries with dot notation
- [unset-value](https://github.com/jonschlinkert/unset-value): Delete nested properties from an object using dot notation (`'a.b.c'`) paths.
- [get-value](https://github.com/jonschlinkert/get-value): Use property paths (`a.b.c`) to get a nested value from an object.
- [set-value](https://github.com/jonschlinkert/set-value): Create nested values and any intermediaries using dot notation (`'a.b.c'`) paths.
- [put-value](https://github.com/tunnckocore/put-value): Update only existing values from an object, usin dot notation (`'a.b.c'`) paths.
- [del-value](https://github.com/tunnckocore/del-value): Delete deeply nested value from an object using dot notation (`'a.b.c'`) paths.
- [omit-value](https://github.com/jonschlinkert/omit-value): Omit properties from an object or deeply nested property using dot notation
- [object.omit](https://github.com/jonschlinkert/object.omit): Return a copy of an object excluding the given key, or array of keys. Also… [more](https://github.com/jonschlinkert/object.omit)
- [has-value](https://github.com/jonschlinkert/has-value): Returns true if a value exists, false if empty. Works with dot notation (`'a.b.c'`) paths.
- [has-own-deep](https://github.com/jonschlinkert/has-own-deep): Returns true if an object has an own, nested property using dot notation
- [is-extendable](https://github.com/jonschlinkert/is-extendable): Returns true if a value is any of the object types: array, regexp, plain object,… [more](https://github.com/jonschlinkert/is-extendable)
- [is-real-object](https://github.com/tunnckocore/is-real-object): Returns `true` if a value is any type of object, but not an array. Browserify-ready.
- [object-visit](https://github.com/jonschlinkert/object-visit): Call the given method on each value in the given object.


## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/tunnckoCore/get-last-value/issues/new).  
But before doing anything, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines.


## [Charlike Make Reagent](http://j.mp/1stW47C) [![new message to charlike][new-message-img]][new-message-url] [![freenode #charlike][freenode-img]][freenode-url]

[![tunnckocore.tk][author-www-img]][author-www-url] [![keybase tunnckocore][keybase-img]][keybase-url] [![tunnckoCore npm][author-npm-img]][author-npm-url] [![tunnckoCore twitter][author-twitter-img]][author-twitter-url] [![tunnckoCore github][author-github-img]][author-github-url]


[npmjs-url]: https://www.npmjs.com/package/get-last-value
[npmjs-img]: https://img.shields.io/npm/v/get-last-value.svg?label=get-last-value

[license-url]: https://github.com/tunnckoCore/get-last-value/blob/master/LICENSE.md
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg


[codeclimate-url]: https://codeclimate.com/github/tunnckoCore/get-last-value
[codeclimate-img]: https://img.shields.io/codeclimate/github/tunnckoCore/get-last-value.svg

[travis-url]: https://travis-ci.org/tunnckoCore/get-last-value
[travis-img]: https://img.shields.io/travis/tunnckoCore/get-last-value.svg

[coveralls-url]: https://coveralls.io/r/tunnckoCore/get-last-value
[coveralls-img]: https://img.shields.io/coveralls/tunnckoCore/get-last-value.svg

[david-url]: https://david-dm.org/tunnckoCore/get-last-value
[david-img]: https://img.shields.io/david/tunnckoCore/get-last-value.svg

[standard-url]: https://github.com/feross/standard
[standard-img]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg


[author-www-url]: http://www.tunnckocore.tk
[author-www-img]: https://img.shields.io/badge/www-tunnckocore.tk-fe7d37.svg

[keybase-url]: https://keybase.io/tunnckocore
[keybase-img]: https://img.shields.io/badge/keybase-tunnckocore-8a7967.svg

[author-npm-url]: https://www.npmjs.com/~tunnckocore
[author-npm-img]: https://img.shields.io/badge/npm-~tunnckocore-cb3837.svg

[author-twitter-url]: https://twitter.com/tunnckoCore
[author-twitter-img]: https://img.shields.io/badge/twitter-@tunnckoCore-55acee.svg

[author-github-url]: https://github.com/tunnckoCore
[author-github-img]: https://img.shields.io/badge/github-@tunnckoCore-4183c4.svg

[freenode-url]: http://webchat.freenode.net/?channels=charlike
[freenode-img]: https://img.shields.io/badge/freenode-%23charlike-5654a4.svg

[new-message-url]: https://github.com/tunnckoCore/messages
[new-message-img]: https://img.shields.io/badge/ask%20me-anything-green.svg