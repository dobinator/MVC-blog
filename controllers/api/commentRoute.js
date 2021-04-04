const router = require('express').Router();
const { Comment, Post} = require ("../../models");

router.get ('/', (req, res) => {
Comment.findAll({   
include:[Post]
}).then((CommentData) =>{
    res.json(CommentData);
});
});

// router.get('/:id', (req, res) => {
// Comment.findOne({
//   where:

// })

router.post('/', (req, res)=>{
    Comment.create(req, body)
    .then((CommentData)=> {
     res.json (CommentData);
    });
});

router.put('/:id', (req, res)=> {
Comment.update (req.body,{
  where:{
  id: req.params.id
  },
})
.then((CommentData)=>{
    res.json(CommentData);
});
});

router.delete ('/:id', (req, res) => {
Comment.destroy ({
    where:{
        id:req.params.id
    },
})
.then ((CommentData)=> {
res.json(CommentData);

});

});

module.exports = router; 