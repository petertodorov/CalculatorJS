const Article = require('../models').Article;
const User = require('../models').User;

module.exports = {
    index: (req, res) => {
        Article.findAll({limit: 6, include: [{model: User}]}).then(articles => {
            res.render('home/index', {articles: articles});

        })
    },
    whenLogged: (req, res) => {
        Article.findAll({where: {authorId: req.user.id},limit: 6, include: [{model: User}] }).then(articles => {
            res.render('home/index', {articles: articles});
        })
    }
};




