const express = require('express')
const app = express()
const db = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()

app.use(cors())
app.use(bodyParser.json())

app.set('view engine', 'html')

const { userRoute } = require('./routes')

app.use('/user', userRoute)

app.get('*', (req, res) => {
  res.status(404).sendFile(__dirname + '/static/404.html')
})

db.connect(process.env.DB_HOST, { useNewUrlParser: true, useUnifiedTopology: true }, () => {})

app.listen(process.env.APP_PORT, () => {})