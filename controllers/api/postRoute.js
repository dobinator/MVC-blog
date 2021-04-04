const router = require('express').Router();
const sequelize = require ('../../config/connection');
const { Post, User, Comment } = require ('../../models');
const { route } = require('./commentRoute');



//finding all posts
router.get ('/', (req, res) => {
    Post.findAll({
    order: [['created_at', 'DESC']],
    attributes: [
     'id',
     'content',
     'title',
     'user_id',
     'created_at'
    ]
    })
})


//getting one post 
router.get ('/:id', (req, res)=>{
Post.findOne({
})

}
)


//creating a post
router.post('/', (req, res)=> {
    Post.create ({


    })

})



// updating a post
route.put ('/:id', (res, req)=> {
Post.update({



})


})



// delete post
router.delete ('/:id', (req, res)=> {
    Post.destroy({



    })
})


module.exports= router;