const isObject = require('isobject')
const isArray = require('isarray')
const logger = require('./logger')
const express = require('express')
const { httpLogger } = require('./logger')
const expressIp = require('express-ip')

module.exports = (config, Nai) => {
  if (!isObject(config)) logger.naiFatal('Nai.init config must be an object', true)
  if (config.body === true) {
    Nai.$app.use(express.json())
    Nai.$app.use(express.urlencoded({ extended: false }))
  }
  if (config.crossOrigin === true) {
    Nai.$app.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*')
      res.header(
        'Access-Control-Allow-Headers',
        'Authorization,X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method'
      )
      res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PATCH, PUT, DELETE')
      res.header('Allow', 'GET, POST, PATCH, OPTIONS, PUT, DELETE') / next()
    })
  }
  
  if (config.httpLogger === true) {
    Nai.$app.use(httpLogger)
  }
  
  if (config.ip === true) {
    Nai.$app.use(expressIp().getIpInfoMiddleware)
  }
}
