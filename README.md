# url-param
> get url params easily.

# install
```
$ npm install url-param
```

# usage
```javascript
// location.href = 'https://www.google.com/search?source=hp&q=url-param'
import u from 'url-param'

u()
//=> { source: 'hp', q: 'url-param' }

u('source')
u().source
u()['source']
//=> 'hp'

u('q')
u().q
u()['q']
//=> 'url-param'

u('https://www.google.com/search?q=url-param')
//=> { q: 'url-param' }
```

# License
MIT