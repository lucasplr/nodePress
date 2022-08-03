const Sequelize = require('sequelize')
const connection = require('../database/database')

const Category = connection.define('categories', {
    title:{
        type: Sequelize.STRING,
        allowNull: false
    },slug:{
        type: Sequelize.STRING,
        allowNull: false
    }
})

Category.sync({force: true}) // forceful syncronize and recreate the table with the relations

module.exports = Category