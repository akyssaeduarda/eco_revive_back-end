// configuração do banco de dados
const {Sequelize} = require('sequelize')

const db = new Sequelize( {
  host: "localhost", 
  dialect: "mysql",
  username: "root",
  password: "123@start",
  database: "eco_revive",
  define: {
    timestamps: true, 
    underscored: true
  }
})
try {
  db.authenticate();
  console.log("deu certo")
} catch (error) {
  console.log("deu erro!")
}

module.exports = db;
6