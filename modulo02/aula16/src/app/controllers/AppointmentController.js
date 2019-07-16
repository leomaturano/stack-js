const { User } = require('../models')

class AppointmentController {
  async create (req, res) {
    const provider = await User.findByPk(req.params.provider)

    return res.render('appointments/create', { provider })
  }

  async store (req, res) {
    /*
    const { filename: avatar } = req.file
    req.body.avatar = avatar

    await Appointment.create(req.body)
    req.flash('success', 'Usuário cadastrado. ' + req.body.name)
    return res.redirect('/')
*/
  }
}
module.exports = new AppointmentController()
