const router = require('express').Router()
const userController = require('../../controllers/authController')

router.post('/register', userController.register)
router.post('/login', userController.login)
router.post('/check_token', userController.checkToken)

module.exports = router