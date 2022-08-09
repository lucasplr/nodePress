const Sequelize = require('sequelize')
const connection = require('../database/database')

const User = connection.define('users', {
    email:{
        type: Sequelize.STRING,
        allowNull: false
    },password:{
        type: Sequelize.STRING,
        allowNull: false
    }
})

User.sync({force: false}) // forceful syncronize and recreate the table with the relations

module.exports = User