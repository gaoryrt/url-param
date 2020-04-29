"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.u = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var u = function u() {
  var arg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  if (_typeof(arg) === 'object') return '?' + Object.getOwnPropertyNames(arg).map(function (key) {
    return encodeURIComponent(key) + '=' + encodeURIComponent(arg[key]);
  }).join('&');
  var args = {};
  var query = window.location.search.substring(1);
  var sIdx = arg.indexOf('?');
  var hIdx = arg.indexOf('#');
  if (sIdx >= 0) query = hIdx < 0 ? arg.slice(sIdx + 1) : arg.slice(sIdx + 1, hIdx);
  var pairs = query.split("&");

  for (var i = 0, len = pairs.length; i < len; i += 1) {
    var pos = pairs[i].indexOf('=');
    if (pos == -1) continue;
    var argname = decodeURIComponent(pairs[i].substring(0, pos));
    var value = pairs[i].substring(pos + 1);
    args[argname] = decodeURIComponent(value);
  }

  if (arg && sIdx < 0) return args[arg];
  return args || {};
};

exports.u = u;
