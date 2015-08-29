/*!
 * get-last-value <https://github.com/tunnckoCore/get-last-value>
 *
 * Copyright (c) 2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var visit = require('object-visit')
var isObject = require('is-real-object')

module.exports = function getLastValue (obj, prop) {
  var ctx = {
    get: function (key, val) {
      if (typeof key === 'string' && key === prop && isObject(val)) {
        ctx.value = val
        return ctx
      }
      if (isObject(key)) {
        return visit(ctx, 'get', key)
      }
      if (isObject(val)) {
        return visit(ctx, 'get', val)
      }
      if (prop === key) {
        ctx.value = val
      }
      return ctx
    }
  }
  return ctx.get(obj).value
}
