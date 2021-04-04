const User = require('./User');
const Comment = require('./Comment');
const Post = require ('./Post');

User.belongsTo(Comment, {

})

Comment.hasMany(Post, {

})

Post.belongsToMany({
    
})








module.exports = { 
    User, 
    Comment,
    Post,
};
