const { isNum } = require('../utils/box')

function parse(object) {
  for (let item in object) {
    if (!isNum(object[item])) {
      continue
    } else {
      object[item] = parseInt(object[item])
    }
  }
  return object
}

module.exports = (req, res, next) => {
  req.query = parse(req.query)
  req.body = parse(req.body)
  next()
}
