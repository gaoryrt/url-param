import u from './index'

console.log(u('a'))
console.log(u()['b'])
console.log(u().c)
var url = u({A: 'one', B: 'two', C: 'three'})
console.log(url)
console.log(u(url))
