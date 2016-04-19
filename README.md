# winston-bugsnag

A [Bugsnag](https://bugsnag.com) transport for [Winston](https://github.com/winstonjs/winston)

# installation

```sh
npm install --save winston-bugsnag
```

# usage

```js
var bugsnag = require('bugsnag')
var winston = require('winston')
var winstonBugsnag = require('winston-bugsnag')

bugsnag.register('api key goes here')
winston.add(winstonBugsnag)
```

# license

MIT