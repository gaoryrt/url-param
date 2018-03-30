import u from './index'

console.log(u('β'))
var url = 'www.google.com' + u({ q: '⭐' })
console.log(url)
console.log(u('https://www.google.com/search?q=%E2%AD%90'))
