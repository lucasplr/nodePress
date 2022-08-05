const Sequelize = require('sequelize')
const connection = new Sequelize('nodepress', 'root', '@Lucasplr321', {
    host: 'localhost',
    dialect: 'mysql',
    timezone: '-03:00'
})

module.exports = connection