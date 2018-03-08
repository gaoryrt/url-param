# url-param
> get url params easily.

# install
```
$ npm install url-param
```

# usage
```
// location.href = 'https://www.google.com/search?source=hp&q=url-param'
import u from 'url-param'

u()
//=> { source: 'hp', q: 'url-param' }

u('source') // or `u().source` or `u()['source']`
//=> 'hp'

u('q') // or `u().q` or `u()['q']`
//=> 'url-param'

u('https://www.google.com/search?q=url-param')
//=> { q: 'url-param' }
```

# License
MIT