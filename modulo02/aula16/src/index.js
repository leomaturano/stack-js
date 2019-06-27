const server = require('./server')
console.log('iniciando')

server.listen(process.env.PORT || 3333)
