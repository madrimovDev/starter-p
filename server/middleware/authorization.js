const { jwt } = require('../db/user.json')

const checkAuth = (req, res, next) => {
  const token = req.header('Authorization')

  if (token !== jwt) {
    res.status(401).json('Unauthorized')
    return
  }
  next()
}

module.exports = checkAuth
