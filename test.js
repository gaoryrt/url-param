const { u } = require('./dist/main.js')

test(`u() of no search is {}`, () => {
  jsdom.reconfigure({ url: 'https://a.com/search' })
  expect(u()).toEqual({})
})

test(`u() of %E2%AD%90 is ⭐`, () => {
  jsdom.reconfigure({ url: 'https://a.com/search?q=%E2%AD%90' })
  expect(u()).toEqual({q: '⭐'})
})

test(`u('a') of a=%21&%CE%B2=2 is !`, () => {
  jsdom.reconfigure({ url: 'https://a.com/search?a=%21&%CE%B2=2' })
  expect(u('a')).toEqual('!')
})

test(`u().a of a=%21&%CE%B2=2 is !`, () => {
  jsdom.reconfigure({ url: 'https://a.com/search?a=%21&%CE%B2=2' })
  expect(u().a).toEqual('!')
})

test(`u()['a'] of a=%21&%CE%B2=2 is !`, () => {
  jsdom.reconfigure({ url: 'https://a.com/search?a=%21&%CE%B2=2' })
  expect(u()['a']).toEqual('!')
})

test(`u('β') of a=%21&%CE%B2=2 is 2`, () => {
  jsdom.reconfigure({ url: 'https://a.com/search?a=%21&%CE%B2=2' })
  expect(u('β')).toEqual('2')
})

test(`u().β of a=%21&%CE%B2=2 is 2`, () => {
  jsdom.reconfigure({ url: 'https://a.com/search?a=%21&%CE%B2=2' })
  expect(u().β).toEqual('2')
})

test(`u()['β'] of a=%21&%CE%B2=2 is 2`, () => {
  jsdom.reconfigure({ url: 'https://a.com/search?a=%21&%CE%B2=2' })
  expect(u()['β']).toEqual('2')
})

test(`u({a: '!', β: '2'}) returns ?a=!&%CE%B2=2`, () => {
  expect(u({a: '!', β: '2'})).toEqual('?a=!&%CE%B2=2')
})

test(`u('?a=%21&%CE%B2=2') returns {a: '!', β: '2'}`, () => {
  expect(u('?a=%21&%CE%B2=2')).toEqual({a: '!', β: '2'})
})

test(`u('a') of a=b#123 is 'b'`, () => {
  jsdom.reconfigure({ url: 'https://a.com/search?a=b#123' })
  expect(u('a')).toEqual('b')
})

test(`u('a.com?a=b#123') returns {a: 'b'}`, () => {
  expect(u('a.com?a=b#123')).toEqual({a: 'b'})
})
