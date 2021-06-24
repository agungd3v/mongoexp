const route = require('express').Router()
const authenticate = require('../middleware/jwt')

const authRoute = require('./api/authRoute')
const userRoute = require('./api/userRoute')
const mailerRoute = require('./api/mailerRoute')

route.use('/', authRoute)
route.use('/user', authenticate, userRoute)
route.use('/mailer', mailerRoute)

module.exports = route