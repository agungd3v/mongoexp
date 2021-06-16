const router = require('express').Router()
const userController = require('../../controllers/userController')

router.get('/', userController.index)
router.post('/', userController.store)
router.get('/:userId', userController.show)
router.post('/update/:userId', userController.update)
router.post('/delete/:userId', userController.delete)

module.exports = router