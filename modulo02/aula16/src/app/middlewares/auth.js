module.exports = (req, res, next) => {
  if (req.session && req.session.user) {
    res.locals.user = req.session.user
    return next()
  }

  req.flash('error', 'Usuário não está logado')
  console.log('não está logado')
  return res.redirect('/')
}
