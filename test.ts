import * as bugsnag from 'bugsnag'
import { add, log } from 'winston'
import { BugsnagTransport } from './'

bugsnag.register('api key goes here')
add(BugsnagTransport as any) // TODO: fix winston typing

log('info', 'something', {
  userId: 'abcdef'
})
