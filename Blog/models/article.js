const Sequelize = require('sequelize');

module.exports = function (sequelize) {
    const Article = sequelize.define('Article', {
        title: {
            type: Sequelize.STRING,
            required: true,
            allowNull: false
        },
        content: {
            type: Sequelize.TEXT,
            required: true,
            allowNull:false
        },
        date: {
            type: Sequelize.DATE,
            allowNull:false,
            required: true,
            defaultValue: Sequelize.NOW,
        },
    });
    Article.associate = (models)=>{
        Article.belongsTo(models.User,{
            foreignKey:'authorId',
            targetKey:'id'
        });
    };
    return Article;
};