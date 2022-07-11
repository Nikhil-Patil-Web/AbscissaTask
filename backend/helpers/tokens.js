const jwt = require('jsonwebtoken')
exports.generateToken = (payload, expired) => {
  console.log(process.env.JWT_SECRET)
  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: expired,
  })
}
