const router = require('express').Router()
const user = require('../../models/user')

router.get('/', async (req, res) => {
  try {
    const users = await user.find()
    res.json({ status: true, message: users })
  } catch (error) {
    res.json({ status: false, message: error })
  }
})

router.post('/', async (req, res) => {
  const data = new user({
    name: req.body.name,
    gender: req.body.gender,
    age: req.body.age
  })
  try {
    const store = await data.save()
    res.json({ status: true, message: store })
  } catch (error) {
    res.json({ status: false, message: error })
  }
})

router.get('/:userId', async (req, res) => {
  try {
    const data = await user.findById(req.params.userId)
    res.json({ status: true, message: data })
  } catch (error) {
    res.json({ status: false, message: error })
  }
})

router.post('/update/:userId', async (req, res) => {
  try {
    const data = await user.updateOne({ _id: req.params.userId }, { $set: {
        name: req.body.name,
        gender: req.body.gender,
        age: req.body.age
      }
    })
    res.json({ status: true, message: data })
  } catch (error) {
    res.json({ status: false, message: error })
  }
})

router.post('/delete/:userId', async (req, res) => {
  try {
    const data = await user.deleteOne({ _id: req.params.userId })
    res.json({ status: true, message: data })
  } catch (error) {
    res.json({ status: false, message: error })
  }
})

module.exports = router