const jsonServer = require('json-server')
const server = jsonServer.create()
const middlewares = jsonServer.defaults()

const { user } = require('./user.json')

server.use(middlewares)
server.use(jsonServer.bodyParser)

server.post('/login', (req, res) => {
  let { username, password } = req.body

  setTimeout(() => {
    if (user.username !== username) {
      res.status(401).json('Username was entered incorrectly')
      return
    }
    if (user.password !== password) {
      res.status(401).json('Password was entered incorrectly')
      return
    }

    res.status(200).json({
      name: user.name,
      surname: user.surnname,
      username: user.username,
      group: user.group,
      direction: user.direction,
      rating: user.rating,
    })
  }, 1500)
})

server.listen(8880, () => {
  console.log('JSON Server is running')
})
