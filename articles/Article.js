const Sequelize = require('sequelize')
const connection = require('../database/database')
const Category = require('../categories/Category')

const Article = connection.define('articles', {
    title:{
        type: Sequelize.STRING,
        allowNull: false
    },slug:{
        type: Sequelize.STRING,
        allowNull: false
    }, body:{
        type: Sequelize.TEXT,
        allowNull: false
    }
})

Category.hasMany(Article)//One Category has many Articles
Article.belongsTo(Category) //Article belongs to a Category 1 to 1 

Article.sync({force: true})

module.exports = Article