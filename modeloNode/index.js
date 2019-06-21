const express = require('express')

const app = express()

app.get('/', (req, res) => {
  return res.json({'mensagem': 'Bem vindo a API'})
})

console.log('Abra o navegador e acesse http://localhost:3333')

app.listen(3333)
