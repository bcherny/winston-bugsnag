# Winston-Bugsnag

[Bugsnag](https://bugsnag.com) transport for [Winston](https://github.com/winstonjs/winston)

# Installation

```sh
npm install winston-bugsnag --save
```

# Usage

```js
import * as bugsnag from 'bugsnag'
import { add } from 'winston'
import { BugsnagTransport } from 'winston-bugsnag'

bugsnag.register('Bugsnag api key goes here')
add(BugsnagTransport)
```

# Passing `userId` to Bugsnag

```js
import * as bugsnag from 'bugsnag'
import { add, log } from 'winston'
import { BugsnagTransport } from './'

bugsnag.register('api key goes here')
add(BugsnagTransport)

log('info', 'something', {
  userId: 'abcdef'
})
```

# License

MIT