const transporter = require('../config/mailer')

const mailerController = {
  bulk: async (req, res) => {
    const { from, to, subject } = req.body
    // res.json({ status: true, from: from, to: to, subject: subject })
    if (!from) {
      res.json({ status: false, message: 'Please enter this message from who' })
    } else if (!to) {
      res.json({ status: false, message: 'Please enter the purpose email of your message' })
    } else if (!subject) {
      res.json({ status: false, message: 'Please enter subject for message' })
    } else {
      const mail = await transporter.sendMail({
        from: '"Coompact ID 👻" <sales@coompact.id>',
        to: 'agungd3v@gmail.com, agungardynto@gmail.com, mailtotuyul1@gmail.com',
        subject: 'Test Bulk Sender',
        html: '<h1>hello world!</h1>'
      })
      if (mail.messageId) {
        res.json({ status: true, message: 'Sending Bulk Complete' })
      }
    }
  }
}

module.exports = mailerController