module.exports = {
  dialect: 'postgres',
  host: '127.0.0.1',
  username: 'docker',
  password: 'docker',
  database: 'stack-js',
  operatorsAliases: false,
  define: {
    timestamps: true,
    undescored: true,
    undescoredAll: true
  }
}
