var bugsnag = require('bugsnag'),
    util = require('util'),
    winston = require('winston')

function Bugsnag (options) {

  this.name = 'bugsnag'

}

util.inherits(Bugsnag, winston.Transport)

Bugsnag.prototype.log = function (level, msg, meta, callback) {

  // map of winston:bugsnag log levels
  // @see https://github.com/winstonjs/winston#logging-levels
  // @see https://bugsnag.com/docs/notifiers/node#severity
  const levelMapping = {
    info: 'info',
    error: 'error',
    warn: 'warning'
  }

  if (!bugsnag.metaData.apiKey) {
    throw new Error ('please configure bugsnag with your API key (see https://bugsnag.com/docs/notifiers/node)')
  }

  if (level in Object.keys(levelMapping)) {
    bugsnag.notify(msg, {
      severity: levelMapping[level]
    }, meta)
  }

  callback(null, true)

}

module.exports = Bugsnag