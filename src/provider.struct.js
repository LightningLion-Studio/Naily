const isObject = require('isobject')

module.exports = (nai, provide) => {
  for (let i = 0; i < provide.length; i++) {
    nai.naiApp.use((req, res, next) => {
      req.nai = new Array()
      req.nai[i] = provide[i]
      next()
    })
  }
}
