# url-param
> separate / combine url params easily.

# install
```
$ npm install url-param
```

# usage
```javascript
// say `location.search` is '?a=%21&%CE%B2=2'
import { u } from 'url-param'

u()         // => {a: "!", β: "2"}
  u('a')    // => '!'
  u().β     // => '2'
  u()['β']  // => '2'

var search = u({ q: '⭐' })
// => '?q=%E2%AD%90'

u(search) // => {q: "⭐"}
u('https://www.google.com/search?q=%E2%AD%90') // => {q: "⭐"}
```

# License
MIT