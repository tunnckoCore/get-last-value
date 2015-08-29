/*!
 * get-last-value <https://github.com/tunnckoCore/get-last-value>
 *
 * Copyright (c) 2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var test = require('assertit')
var getLastValue = require('./index')

var obj = {
  a: 111,
  b: {
    a: 222,
    f: 'fff',
    c: {
      a: 333,
      y: {
        z: 'www'
      },
      e: {
        a: 555,
        g: {
          f: {
            y: 'yy',
            x: {
              a: 'zzz'
            },
            w: null
          }
        }
      },
      d: {
        a: 444,
        u: undefined,
        k: {
          a: 777,
          s: false,
          zero: 0
        }
      },
      f: 123
    }
  }
}

test('should get value of given property on simple object', function (done) {
  var o = {foo: 'bar', baz: 'qux'}

  test.strictEqual(getLastValue(o, 'foo'), 'bar')
  test.strictEqual(getLastValue(o, 'baz'), 'qux')
  done()
})
test('should respect order first', function (done) {
  var actual = obj
  test.strictEqual(getLastValue(actual, 'a'), 777)
  test.strictEqual(getLastValue(actual, 'f'), 123)
  test.strictEqual(getLastValue(actual, 'y'), 'yy')
  done()
})
test('should return undefined if value not found or set to `undefined`', function (done) {
  test.strictEqual(getLastValue(obj, 'u'), undefined)
  test.strictEqual(getLastValue(obj, 'charlike'), undefined)
  done()
})
test('should return falsey values as they are', function (done) {
  test.strictEqual(getLastValue(obj, 's'), false)
  test.strictEqual(getLastValue(obj, 'w'), null)
  test.strictEqual(getLastValue(obj, 'zero'), 0)
  done()
})
