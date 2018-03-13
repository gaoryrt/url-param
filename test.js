import urlObj from './index'

const a = urlObj('a')
const b = urlObj()['b']
const c = urlObj().c

const newObj = urlObj('https://www.google.com/search?q=url-param')

console.log(a, b, c, newObj)
