const router = require('express').Router();
const withAuth = require ('../utils/auth.js')
const { Comment} = require ("../../models");

// router.get ('/', (req, res) => {
// Comment.findAll({   
// include:[Post]
// }).then((CommentData) =>{
//     res.json(CommentData);
// });
// });

// router.get('/:id', (req, res) => {
// Comment.findOne({
//   where:

// })

router.post('/', withAuth,(req, res)=>{
    Comment.create({...req.body, userId: req.session.userId})
    .then((CommentData)=> {
     res.json (CommentData);
    }).catch (err=>{
        res.json(err)
    })

});

// router.put('/:id', (req, res)=> {
// Comment.update (req.body,{
//   where:{
//   id: req.params.id
//   },
// })
// .then((CommentData)=>{
//     res.json(CommentData);
// });
// });

// router.delete ('/:id',withAuth, (req, res) => {
// Comment.destroy ({
//     where:{
//         id:req.params.id
//     },
// })
// .then ((CommentData)=> {
// res.json(CommentData);

// });

// });

module.exports = router; 