const router = require('express').Router();
const withAuth = require ('../../utils/auth')
// const sequelize = require ('../../config/connection');
const { Post } = require ('../../models');
const { route } = require('./comment-routes');


//creating a post
router.post('/', withAuth, (req, res)=> {
    Post.create ({...req.body, user_id: req.session.userId
    }).then((CommentData)=> {
        res.json (CommentData);
       }).catch (err=>{
           res.json(err)
       })

})


// updating a post
router.put ('/:id', withAuth, (res, req)=> {
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