const jsonServer = require('json-server')
const server = jsonServer.create()
const middlewares = jsonServer.defaults()

const {user} = require('./user.json')

server.use(middlewares)
server.use(jsonServer.bodyParser)

server.post('/login', (req, res) => {
  let { username, password } = req.body
  
  if (user.username !== username) {
    res.status(401).json({
      message: 'Username not valid'
    })
    return
  }
  if (user.password !== password) {
    res.status(401).json({
      message: 'Password not valid',
    })
  }

  res.status(200).json({
    name: user.name,
    surname: user.surnname,
    username: user.username,
    group: user.group,
    direction: user.direction,
    rating: user.rating
  })
})

server.listen(3002, () => {
  console.log('JSON Server is running')
})
