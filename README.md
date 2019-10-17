# url-param
> switch between searchStr and paramsObj

[![Build Status](https://travis-ci.org/gaoryrt/url-param.svg?branch=master)](https://travis-ci.org/gaoryrt/url-param)
[![codecov](https://codecov.io/gh/gaoryrt/url-param/branch/master/graph/badge.svg)](https://codecov.io/gh/gaoryrt/url-param)
![](https://img.badgesize.io/gaoryrt/url-param/master/dist/main.js)
![](https://img.badgesize.io/gaoryrt/url-param/master/dist/main.js?compression=gzip)

# install
```
$ npm install url-param
```

# import
```javascript
import { u } from 'url-param'
```

# usage
## paramsObj <=> searchStr
```javascript
const searchStr = u({ q: '⭐' })
// => '?q=%E2%AD%90'

const paramsObj = u('?q=%E2%AD%90')
// => {q: "⭐"}

const urlObj = u('https://www.google.com/search?q=%E2%AD%90')
// => {q: "⭐"}
```

## for current location.search
```javascript
// say `location.search` is '?a=%21&%CE%B2=2'
u()         // => {a: "!", β: "2"}
  u('a')    // => '!'
  u().β     // => '2'
  u()['β']  // => '2'
```

# License
MIT
