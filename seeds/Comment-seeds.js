const { Comment }= require('../models');

const commentData = [
{
    user_id: 1, 
    post_id: 5, 
    comment_text: "Wonderful News!"
},
{
    user_id: 2, 
    post_id: 5, 
    comment_text: "This is so interesting!"
},
{
    user_id: 1, 
    post_id: 4, 
    comment_text: "Very helpful and insightful."
},
{
    user_id: 4, 
    post_id: 2, 
    comment_text: "Cool beans!!"
},
{
    user_id: 2, 
    post_id: 1, 
    comment_text: "My mind has been expanded."
},
{
    user_id: 3, 
    post_id: 5, 
    comment_text: "Good read and plan on sharing with my colleagues"
},
{
    user_id: 5, 
    post_id: 3, 
    comment_text: "Great!!"
},
{
    user_id: 2, 
    post_id: 1, 
    comment_text: "We have just hit our 1000 comment on here!"
},

]
const commentSeeds = () => Comment.bulkCreate(commentData);

module.exports = commentSeeds; 