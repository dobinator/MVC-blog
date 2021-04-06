const router = require('express').Router();
const withAuth = require ('../../utils/auth')
const sequelize = require ('../../config/connection');
const { Post, User, Comment } = require ('../../models');
const { route } = require('./commentRoute');



//finding all posts
// router.get ('/', (req, res) => {
//     Post.findAll({
//     order: [['created_at', 'DESC']],
//     attributes: [
//      'id',
//      'content',
//      'title',
//      'user_id',
//      'created_at'
//     ]
//     })
// })


// //getting one post 
// router.get ('/:id', (req, res)=>{
// Post.findOne({
// })

// }
// )


//creating a post
router.post('/', withAuth, (req, res)=> {
    Post.create ({...req.body, userId: req.session.userId
    }).then((CommentData)=> {
        res.json (CommentData);
       }).catch (err=>{
           res.json(err)
       })

})



// updating a post
route.put ('/:id', withAuth, (res, req)=> {
Post.update(req.body, {
where: {
    id: req.params.id
}
}).then((CommentData)=> {
    res.json (CommentData);
   }).catch (err=>{
       res.json(err)
   })
})



// delete post
router.delete ('/:id', withAuth, (req, res)=> {
    Post.destroy({
        where: {
            id: req.params.id
        }
    }).then((CommentData)=> {
        res.json (CommentData);
       }).catch (err=>{
           res.json(err)
       })
})


module.exports= router;