const Article = require('../models').Article;
const User = require('./../models').User;
module.exports = {
    createGet: (req, res) => {
        res.render('article/create')
    },
    createPost: (req, res) => {
        let articleArgs = req.body;

        let errorMsg = '';
        if (!req.isAuthenticated()) {
            errorMsg = 'You should be logged in';
        } else if (!articleArgs.title) {
            errorMsg = 'Please enter title';
        } else if (!articleArgs.content) {
            errorMsg = 'Please enter content';
        }
        if (errorMsg) {
            articleArgs.error = errorMsg
            res.render('article/create', articleArgs);

            return;
        }
        articleArgs.authorId = req.user.id;
        Article.create(articleArgs).then(article => {
            res.redirect('/loggedIn');
            console.log('successfully created new article')
        }).catch(err => {
            console.log(err.message);
            res.render('article/create', {error: err.message})
        })
    },
    detailsGet: (req, res) => {
        let id = req.params.id;
        Article.findById(id, {
            include: [
                {
                    model: User
                }
            ]
        }).then(article => {
            res.render('article/details',  article.dataValues)
        })
    }
};