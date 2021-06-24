const nodemailer = require('nodemailer')

module.exports = nodemailer.createTransport({
  pool: true,
  host: 'srv118.niagahoster.com',
  port: 465,
  secure: true,
  auth: {
    user: 'sales@coompact.id',
    pass: 'coompact:443'
  }
})