module.exports = {
  dialect: 'postgres',
  host: '127.0.0.1', //process.env.DB_HOST,
  username: 'docker', //process.env.DB_USER,
  password: 'docker', //process.env.DB_PWD,
  database: 'gonodepizza', //process.env.DB_NAME,
  operatorAliases: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
}
