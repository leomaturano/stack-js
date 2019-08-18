const server = require('./server')

console.log('iniciando',process.env.PORT || 3333)
server.listen(process.env.PORT || 3333)
