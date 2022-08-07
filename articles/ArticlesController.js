const express = require('express')
const slugify = require('slugify')
const router = express.Router()
const Category = require('../categories/Category')
const Article = require('./Article')

router.get('/admin/articles', (req,res) => {
    Article.findAll({
        include: [{model: Category}]
    }).then(articles => {
        res.render('admin/articles/index', {articles: articles})
    })
    
})

router.get('/admin/articles/new', (req,res) => {
    Category.findAll().then(categories => {
        res.render('admin/articles/new', {categories: categories})
    })
})

router.post('/articles/save', (req,res) => {
    var title = req.body.title
    var body = req.body.body
    var category = req.body.category
    
    Article.create({
        title: title,
        slug: slugify(title),
        body: body,
        categoryId: category
    }).then(() => {
        res.redirect('/admin/articles')
    })
})

router.post('/articles/delete', (req,res) => {
    var id = req.body.id
    Article.destroy({
        where:{
            id: id
        }
    }).then(() =>{
        res.redirect('/admin/articles')
    })
})


router.get('/admin/articles/edit/:id',(req,res) => {

    var id = req.params.id

    Article.findByPk(id).then(article => {
        if(article != undefined){

            Category.findAll().then(categories => {
                res.render('admin/articles/edit', {categories: categories, article: article})
            })           
        }else{
            res.redirect('/')
        }
    }).catch(err => {
        res.redirect('/')
    })
})

router.post('/articles/update', (req,res) => {
    var title = req.body.title
    var body = req.body.body
    var id = req.body.id
    var category = req.body.category

    Article.update({title: title, body: body, categoryId: category, slug: slugify(title)},
        {where:{
            id: id
        }
    }).then( () => {
        res.redirect('/admin/articles')
    }).catch(err => {
        res.redirect('/admin/articles')
    })
})

module.exports = router