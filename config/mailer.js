const nodemailer = require('nodemailer')

const mailer = (host, user, pass) => {
  const config = {
    pool: true,
    host: host,
    port: 465,
    secure: true,
    auth: {
      user: user,
      pass: pass
    }
  }
  return nodemailer.createTransport(config)
}

module.exports = mailer