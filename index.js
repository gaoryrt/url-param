export const u = (arg = '') => {
  if (typeof arg === 'object') return '?' + Object.getOwnPropertyNames(arg).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(arg[key])).join('&')
  const args = {}
  let query = window.location.search.substring(1)
  const sIdx = arg.indexOf('?')
  const hIdx = arg.indexOf('#')
  if (sIdx >= 0) query = hIdx < 0
    ? arg.slice(sIdx + 1)
    : arg.slice(sIdx + 1, hIdx)
  const pairs = query.split("&")
  for (let i = 0, len = pairs.length; i < len; i += 1) {
    let pos = pairs[i].indexOf('=')
    if (pos == -1) continue
    let argname = decodeURIComponent(pairs[i].substring(0, pos))
    let value = pairs[i].substring(pos + 1)
    args[argname] = decodeURIComponent(value)
  }
  if (arg && sIdx < 0) return args[arg]
  return args || {}
}