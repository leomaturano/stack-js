const { User } = require('../models')

class UserController {
  create (req, res) {
    return res.render('auth/signup')
  }

  async store (req, res) {
    const { filename: avatar } = req.file
    req.body.avatar = avatar

    await User.create(req.body)
    req.flash('success', 'Usuário cadastrado. ' + req.body.name)
    return res.redirect('/')
  }
}
module.exports = new UserController()
