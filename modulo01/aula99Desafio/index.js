const express = require('express')
const nunjucks = require('nunjucks')

const app = express()
nunjucks.configure('views', {
  autoescape: true,
  express: app,
  watch: true
})
app.set('view engine', 'njk')
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  const message = req.query.message ? req.query.message : ''

  return res.render('index', { message })
})

const protectRoute = (req, res, next) => {
  console.log('Rota: ' + req.route.path)
  console.log('Idade: ' + req.query.age)
  if (req.route.path === '/major' && req.query.age <= 18) {
    return res.redirect(
      '/?message=Violação: Rota Maior e idade ' + req.query.age + ''
    )
  }
  if (req.route.path === '/minor' && req.query.age > 18) {
    return res.redirect(
      '/?message=Violação: Rota Minor e idade ' + req.query.age + ''
    )
  }
  return next()
}

app.get('/major', protectRoute, (req, res) => {
  console.log('Major')
  return res.render('major', { age: req.query.age })
})

app.get('/minor', protectRoute, (req, res) => {
  console.log('Minor')
  return res.render('minor', { age: req.query.age })
})

app.post('/check', (req, res) => {
  console.log(req.body)
  if (req.body.age > 18) {
    res.redirect('/major?age=' + req.body.age)
    return
  }
  res.redirect('/minor?age=' + req.body.age)
})
app.listen(3333)
