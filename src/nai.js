const express = require('express')
const initMiddleWare = require('./initMiddleware')
const logger = require('./logger')

const Nai = {
  $init(config = {}) {
    this.$config = config
    this.$app = express()
    this.$app.use((req, res, next) => (req.nai = new Object() / next()))
    initMiddleWare(config, this)
  },
  $provider(object = {}) {
    let Router = express.Router()
    Router.use((req, res, next) => {
      req.nai = object
      next()
    })
    Router.$provider = this.$provider
    return Router
  },
  $controller(router, callback) {
    this.$app.use(router)
  },
  $start(callback) {
    this.$app.listen(this.$config.port, callback(this.$config.port))
  },
  $logger: logger,
  $router(router) {
    const expRouter = express.Router()
    return expRouter.use(router)
  }
}

module.exports = Nai
