const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(' ')[1];
    jwt.verify(token, process.env.SECRET_TOKEN, (err, user) => {
      if (err) {
        return res.json({
          status: false,
          message: 'Access Forbidden'
        })
      }
      req.user = user;
      next();
    });
  } else {
    res.json({
      status: false,
      message: 'Unauthorize',
    })
  }
}