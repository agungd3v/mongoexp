const mailer = require('../config/mailer')

const mailerController = {
  bulk: async (req, res) => {
    const { authorization, from, to, subject, message } = req.body
    const transporter = await mailer(authorization.host, authorization.user, authorization.pass)
    transporter.verify((err) => {
      let parseEmailToStr
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
          to.length > 1 ? parseEmailToStr = to.join(', ') : parseEmailToStr = to.toString()
          transporter.sendMail({
            from: `"${from}" <${authorization.user}>`,
            to: parseEmailToStr,
            subject: subject,
            html: `<h1>${message}</h1>`
          }, err => {
            if (err) return res.json({ status: false, message: 'Sending blast failed' })
            return res.json({ status: true, message: 'Sending blast complete' })
          })
        }
      }
    })
  }
}

module.exports = mailerController