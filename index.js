const express = require('express')
const app = express()
const db = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()

app.use(cors())
app.use(bodyParser.json())

const route = require('./routes')

app.use('/api', route)

app.get('*', (req, res) => {
  res.status(404).sendFile(__dirname + '/static/404.html')
})

db.connect(process.env.DB_HOST, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }, () => {})

app.listen(process.env.APP_PORT, () => {})