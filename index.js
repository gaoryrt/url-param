"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})

exports.default = function (str) {
  var args = {}
  var query = location.search.substring(1)
  var idx = (str || '').indexOf('?')
  if (str && idx >= 0) query = str.slice(idx + 1)
  var pairs = query.split("&")
  for (var i = 0, len = pairs.length; i < len; i++) {
    var pos = pairs[i].indexOf('=')
    if (pos == -1) continue
    var argname = pairs[i].substring(0, pos)
    var value = pairs[i].substring(pos + 1)
    args[argname] = decodeURIComponent(value)
  }
  if (str && idx < 0) return args[str]
  return args || {}
}
