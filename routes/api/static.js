const router = require('express').Router()

router.get('/', (req, res) => {
  res.json({
    status: true,
    message: 'router / ok'
  })
})

router.get('/profile', (req, res) => {
  res.json({
    status: true,
    message: 'router /profile ok'
  })
})

module.exports = router