const userModel = require('../models/userModel')

const userController = {
  index: async (req, res) => {
    try {
      const users = await userModel.find()
      res.json({ status: true, message: users })
    } catch (error) {
      res.json({ status: false, message: error })
    }
  },
  store: async (req, res) => {
    const data = new userModel({
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
  },
  show: async (req, res) => {
    try {
      const data = await userModel.findById(req.params.userId)
      res.json({ status: true, message: data })
    } catch (error) {
      res.json({ status: false, message: error })
    }
  },
  update: async (req, res) => {
    try {
      const data = await userModel.updateOne({ _id: req.params.userId }, { $set: {
          name: req.body.name,
          gender: req.body.gender,
          age: req.body.age
        }
      })
      res.json({ status: true, message: data })
    } catch (error) {
      res.json({ status: false, message: error })
    }
  },
  delete: async (req, res) => {
    try {
      const data = await userModel.deleteOne({ _id: req.params.userId })
      res.json({ status: true, message: data })
    } catch (error) {
      res.json({ status: false, message: error })
    }
  }
}

module.exports = userController