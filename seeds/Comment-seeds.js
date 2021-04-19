const { Comment }= require('../models');

const commentData = [
{
    userId: 1, 
    postId: 1, 
    body: "Wonderful News!"
},
{
    userId: 2, 
    postId: 2, 
    body: "This is so interesting!"
},
{
    userId: 6, 
    postId: 4, 
    body: "Very helpful and insightful."
},
{
    userId: 4, 
    postId: 2, 
    body: "Cool beans!!"
},
{
    userId: 2, 
    postId: 1, 
    body: "My mind has been expanded."
},
{
    userId: 3, 
    postId: 5, 
    body: "Good read and plan on sharing with my colleagues"
},
{
    userId: 5, 
    postId: 3, 
    body: "Great!!"
},
{
    userId: 2, 
    postId: 1, 
    body: "We have just hit our 1000 comment on here!"
},

]
const commentSeeds = () => Comment.bulkCreate(commentData);

module.exports = commentSeeds; 