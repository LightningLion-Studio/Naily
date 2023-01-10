// 导入naily
const { Nai } = require('../src/index')

// init App
const app = new Nai({
  port: 666,
  body: {
    url: {
      extended: false
    },
    json: {}
  },
  nai: {
    
  }
})

// router, you can write this on another file
const router = require('express').Router()
const home = router.get('/', (req, res) => {
  // req.nai is an object, it save provider array in it
  res.json(req.nai)
})
const post = router.post('/', (req,res) => {
  // it can configuration in nai constructor
  res.json(req.body)
})

// init a factory
app.factory({
  provider: ['some data'],
  controller: [home],
})

// in the end, start to run your app!
app.start(() => {
  console.log(`App is running at 666`)
})
