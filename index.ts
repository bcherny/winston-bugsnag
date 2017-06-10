import * as bugsnag from 'bugsnag'
import { Transport } from 'winston'

export type BugsnagLogLevel = 'info' | 'error' | 'warning'
export type WinstonLogLevel = 'error' | 'warn' | 'info' | 'verbose' | 'debug' | 'silly'

export type Meta = object & {
  userId?: string
}

export class BugsnagTransport extends Transport {
  name = 'bugsnag'

  constructor({ level }: { level: WinstonLogLevel } = { level: 'silly' }) {
    super()
    this.level = level
  }

  log(
    level: WinstonLogLevel,
    msg: string,
    meta: Meta,
    callback: (error: Error | null, success: any) => any
  ) {

    // map of winston:bugsnag log levels
    // @see https://github.com/winstonjs/winston#logging-levels
    // @see https://bugsnag.com/docs/notifiers/node#severity
    const levelMapping: Record<WinstonLogLevel, BugsnagLogLevel> = {
      debug: 'info',
      error: 'error',
      info: 'info',
      silly: 'info',
      verbose: 'info',
      warn: 'warning'
    }

    bugsnag.notify(msg, {
      metaData: meta,
      severity: levelMapping[level],
      userId: meta.userId
    })

    callback(null, true)
  }
}
