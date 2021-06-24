const router = require('express').Router()
const mailerController = require('../../controllers/mailerController')

router.post('/bulk', mailerController.bulk)

module.exports = router