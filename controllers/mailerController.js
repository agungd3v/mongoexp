const mailer = require('../config/mailer')

const mailerController = {
  bulk: async (req, res) => {
    const { authorization, from, to, subject, message } = req.body
    const transporter = await mailer(authorization.host, authorization.user, authorization.pass)
    transporter.verify((err) => {
      if (err) {
        return res.json({
          status: false,
          message: 'Maybe you forgot send object authorization ?'
        })
      } else {
        if (!from) {
          return res.json({ status: false, message: 'Please enter this message from who' })
        } else if (!to) {
          return res.json({ status: false, message: 'Please enter the purpose email of your message' })
        } else if (!subject) {
          return res.json({ status: false, message: 'Please enter subject for message' })
        } else {
          to.map(data => {
            transporter.sendMail({
              from: `"${from}" <${authorization.user}>`,
              to: data,
              subject: subject,
              html: message
            }, err => {
              if (err) return res.json({ status: false, message: 'Sending blast failed' })
              return res.json({ status: true, message: 'Sending blast complete' })
            })
          })
        }
      }
    })
  }
}

module.exports = mailerController