const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

User.hasMany(Post, {
    foreignKey: 'creator_id',
    onDelete: 'SET NULL',
});

Post.belongsTo(User, {
    foreignKey: 'creator_id',
});

Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE',
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id',
});

User.hasMany(Comment, {
    foreignKey: 'poster_id',
    onDelete: 'SET NULL',
});

Comment.belongsTo(User, {
    foreignKey: 'poster_id'
});

module.exports = { User, Post, Comment };
