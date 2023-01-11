const Nai = require('../src/nai')

Nai.$init(require('./fullNaiConfig'))

const home = Nai.$provider({
  foo: '666',
})
const post = home.$provider({
  bar: 'some data',
})

home.get('/', (req, res) => {
  // it will send foo:666
  res.json(req.nai)
})

post.get('/a', (req, res) => {
  // it will send bar:some data
  res.json(req.nai)
})

Nai.$controller([home, post])
Nai.$start(port => console.log(`App start at ${port}`))
