const { Comment }= require('../models');

const commentData = [
{
    user_id: 1, 
    post_id: 1, 
    body: "Wonderful News!"
},
{
    user_id: 2, 
    post_id: 2, 
    body: "This is so interesting!"
},
{
    user_id: 6, 
    post_id: 4, 
    body: "Very helpful and insightful."
},
{
    user_id: 4, 
    post_id: 2, 
    body: "Cool beans!!"
},
{
    user_id: 2, 
    post_id: 1, 
    body: "My mind has been expanded."
},
{
    user_id: 3, 
    post_id: 5, 
    body: "Good read and plan on sharing with my colleagues"
},
{
    user_id: 5, 
    post_id: 3, 
    body: "Great!!"
},
{
    user_id: 2, 
    post_id: 1, 
    body: "We have just hit our 1000 comment on here!"
},

]
const commentSeeds = () => Comment.bulkCreate(commentData);

module.exports = commentSeeds; 