const jwt = require('jsonwebtoken')
const hash = require('password-hash')
const userModel = require('../models/userModel')

const authController = {
  register: async (req, res) => {
    const { name, username, email, password } = req.body
    const data = new userModel({
      name: name,
      username: username,
      email: email,
      password: hash.generate(password)
    })
    try {
      const store = await data.save()
      res.json({ status: true, message: store })
    } catch (error) {
      res.json({ status: false, message: error })
    }
  },
  login: async (req, res) => {
    const { email, password } = req.body;
    const user = await userModel.findOne({
      $or : [
        { email: email },
        { username: email }
      ]
    }).select('+password')
    if (user) {
      const passwordVerify = hash.verify(password, user.password)
      if (passwordVerify) {
        const accessToken = jwt.sign({ email: user.email, id: user._id }, process.env.SECRET_TOKEN, { expiresIn: '1d' })
        res.json({
          status: true,
          message: {
            name: user.name,
            username: user.username,
            email: user.email
          },
          token: accessToken
        })
      } else {
        res.json({ status: false, message: 'Incorrect password, check your password again' })
      }
    } else {
      res.json({ status: false, message: 'Incorrect email or username or password' })
    }
  },
  checkToken: (req, res) => {
    const { token } = req.body
    jwt.verify(token, process.env.SECRET_TOKEN, (err, user) => {
      err ? res.json({ status: true }) : res.json({ status: false })
    })
  }
}

module.exports = authController