const express = require('express')
const route = express.Router()

const { user, jwt } = require('../db/user.json')


route.post('/', (req, res) => {
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
      user: {
        userId: user.id,
        name: user.name,
        surname: user.surnname,
        username: user.username,
        group: user.group,
        direction: user.direction,
        rating: user.rating,
      },
      jwt: jwt,
    })
  }, 1500)
})

route.post('/jwt', (req, res) => {
  let { jwtToken } = req.body
  setTimeout(() => {
    if (jwt !== jwtToken) {
      res.status(401).json('The token is not compatible')
      return
    }
    res.json({
      user: {
        userId: user.id,
        name: user.name,
        surname: user.surnname,
        username: user.username,
        group: user.group,
        direction: user.direction,
        rating: user.rating,
      },
      jwt: jwt,
    })
  }, 2500)
})

module.exports = route
