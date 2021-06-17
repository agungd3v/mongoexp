const route = require('express').Router()
const authenticate = require('../middleware/jwt')

const authRoute = require('./api/authRoute')
const userRoute = require('./api/userRoute')

route.use('/', authRoute)
route.use('/user', authenticate, userRoute)

module.exports = route