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

const users = ['Maria', 'Leonardo', 'Leticia']
app.get('/', (req, res) => {
  return res.render('list', { users: users })
})

app.get('/new', (req, res) => {
  return res.render('new', {})
})

app.post('/create', (req, res) => {
  users.push(req.body.user)
  console.log(req.body)
  res.redirect('/')
})
app.listen(3333)
