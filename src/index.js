const isObject = require('isobject')
const isArray = require('isarray')
const express = require('express')
const logger = require('./logger')
const providerStruct = require('./provider.struct')
const controllerStruct = require('./controller.struct')
const middlewareStruct = require('./middleware.struct')

class Nai {
  constructor(naiConfig = {}) {
    if (!isObject(naiConfig)) logger.naiFatal('Nai config must be an object', true)
    const naiApp = express()

    // inside middleware
    middlewareStruct(naiApp, naiConfig)
    
    // init
    this.naiApp = naiApp
    this.naiConfig = naiConfig
    
  }

  factory(naiFactory = {}) {
    if (!isObject(naiFactory)) logger.naiFatal('naiFactory must be an object')
    const provider = naiFactory.provider
    const controller = naiFactory.controller
    if (!isObject(provider)) logger.naiFatal('naiFactory.provider must be an object', true)
    if (!isArray(controller)) logger.naiFatal('naiFactory.controller must be an array', true)
    if (JSON.stringify(provider) === '{}') logger.naiError('Find an empty provider object')
    if (controller.length === 0) logger.naiError('Find an empty provider array')
    providerStruct(this, provider)
    controllerStruct(this, controller)
  }

  start(callback) {
    this.naiApp.listen(this.naiConfig.port, callback())
  }
}

module.exports = {
  Nai,
  Log: {
    trace: logger.naiTrace,
    mark: logger.naiMark,
    warn: logger.naiWarn,
    info: logger.naiInfo,
    debug: logger.naiDebug,
    error: logger.naiError,
    fatal: logger.naiError,
  },
}
