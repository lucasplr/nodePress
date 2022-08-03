const Sequelize = require('sequelize')
const connection = new Sequelize('nodepress', 'root', '@Lucasplr321', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection