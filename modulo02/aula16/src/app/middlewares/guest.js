module.exports = (req, res, next) => {
  if (req.session && !req.session.user) {
    return next()
  }
  req.flash('error', 'Usuário está logado')
  console.log('está logado')
  return res.redirect('/app/dashboard')
}
