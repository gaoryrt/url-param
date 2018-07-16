import u from './index'

console.log(u({}))
console.log('www.google.com' + u({ q: '⭐', b: 123 }))
console.log(u('https://www.google.com/search?q=%E2%AD%90&b=321'))
