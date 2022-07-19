const express = require('express')
const cors = require('cors')

const authRoutes = require('./routers/auth.routes')
const homeworksRoutes = require('./routers/homeworks.routes')

const authorization = require('./middleware/authorization')

const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/login', authRoutes)
app.use('/homeworks', authorization, homeworksRoutes)

app.listen(8880, () => {
  console.log('Express server is running on http://localhost/8880')
})
