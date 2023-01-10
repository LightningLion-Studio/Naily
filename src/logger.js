const log4js = require('log4js')

const httpLog = log4js.getLogger('Nai REQUEST')
httpLog.level = 'trace'
exports.httpLogger = log4js.connectLogger(httpLog, { level: 'MARK' })

exports.naiFatal = (text, isThrow = false) => {
  const i = log4js.getLogger('Nai FATAL!')
  i.level = 'trace'
  i.fatal(text)
  if (isThrow) {
    throw Error(`Nai FATAL! ${text}`)
  }
}

exports.naiError = (text, isThrow = false, title = 'Nai ERR!') => {
  const i = log4js.getLogger(title)
  i.level = 'trace'
  i.error(text)
  if (isThrow) {
    throw Error(`${title} ${text}`)
  }
}

exports.naiDebug = (text, title = 'Nai DEBUG') => {
  const i = log4js.getLogger(title)
  i.level = 'trace'
  i.debug(text)
}

exports.naiInfo = (text, title = 'Nai INFO') => {
  const i = log4js.getLogger(title)
  i.level = 'trace'
  i.info(text)
}

exports.naiWarn = (text, title = 'Nai WARN') => {
  const i = log4js.getLogger(title)
  i.level = 'trace'
  i.warn(text)
}

exports.naiTrace = (text, title = 'Nai TRACE') => {
  const i = log4js.getLogger(title)
  i.level = 'trace'
  i.trace(text)
}

exports.naiMark = (text, title = 'Nai MARK') => {
  const i = log4js.getLogger(title)
  i.level = 'trace'
  i.mark(text)
}
