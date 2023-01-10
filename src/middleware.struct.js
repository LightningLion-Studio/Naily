const { httpLogger } = require('./logger')
const isObject = require('isobject')
const express = require('express')

module.exports = (nai, naiConfig) => {
  // logger
  if (naiConfig.logger) nai.use(httpLogger)

  // body
  if (naiConfig.body === true) {
    nai.use(express.json())
    nai.use(express.urlencoded())
  } else if (isObject(naiConfig.body)) {
    // json
    if (isObject(naiConfig.body.json)) {
      nai.use(express.json(naiConfig.body.json))
    } else {
      nai.use(express.json())
    }

    // urlencoded
    if (isObject(naiConfig.body.url)) {
      nai.use(express.urlencoded(naiConfig.body.url))
    } else {
      nai.use(express.urlencoded())
    }
  }
}
