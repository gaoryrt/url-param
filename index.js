// "use strict"

// Object.defineProperty(exports, "__esModule", {
//   value: true
// })

// exports.default = function (arg) {
//   if (typeof arg === 'object') {
//     var obj = Object.getOwnPropertyNames(arg)
//     return '?' + obj.map(function(key) {
//       return encodeURIComponent(key) + '=' + encodeURIComponent(arg[key])
//     }).join('&')
//   }
//   var args = {},
//   query = location.search.substring(1),
//   idx = (arg || '').indexOf('?')
//   if (arg && idx >= 0) query = arg.slice(idx + 1)
//   var pairs = query.split("&")
//   for (var i = 0, len = pairs.length; i < len; i += 1) {
//     var pos = pairs[i].indexOf('=')
//     if (pos == -1) continue
//     var argname = decodeURIComponent(pairs[i].substring(0, pos))
//     var value = pairs[i].substring(pos + 1)
//     args[argname] = decodeURIComponent(value)
//   }
//   if (arg && idx < 0) return args[arg]
//   return args || {}
// }


export default arg => {
  if (typeof arg === 'object') {
    return '?' + Object.getOwnPropertyNames(arg).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(arg[key])).join('&')
  }
  const args = {}
  let query = location.search.substring(1)
  const idx = (arg || '').indexOf('?')
  if (arg && idx >= 0) query = arg.slice(idx + 1)
  var pairs = query.split("&")
  for (var i = 0, len = pairs.length; i < len; i += 1) {
    var pos = pairs[i].indexOf('=')
    if (pos == -1) continue
    var argname = decodeURIComponent(pairs[i].substring(0, pos))
    var value = pairs[i].substring(pos + 1)
    args[argname] = decodeURIComponent(value)
  }
  if (arg && idx < 0) return args[arg]
  return args || {}
}