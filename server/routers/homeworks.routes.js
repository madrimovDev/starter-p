const express = require('express')

const { homeworks } = require('../db/homeworks.json')

const route = express.Router()

route.get('/:userId', (req, res) => {
  const { userId } = req.params

  const _homeworks = homeworks.filter(homework => homework.userId === userId)

  if (!_homeworks) {
    res.status(404).json('Not Homeworks')
    return
  }

  res.status(200).json({
    homeworks: _homeworks
  })
})

module.exports = route