const express = require('express')
const app = express()
const db = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()

app.use(cors())
app.use(bodyParser.json())

const { static, userRoute } = require('./routes')

app.use('/', static)
app.use('/user', userRoute)

db.connect(process.env.DB_HOST, { useNewUrlParser: true, useUnifiedTopology: true }, () => {})

app.listen(process.env.APP_PORT, () => {})