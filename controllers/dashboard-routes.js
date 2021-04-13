const router = require("express").Router();
const sequelize = require('../config/connection.js');
const { Post } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      where: {
        userId: req.session.userId,
      },
    });

    const posts = postData.map((post) => post.get({ plain: true }));
    res.render("all-post", {
      layout: "dashboard",
      posts,

      // logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("edit/:id", withAuth, async (req, res) => {
  try {
    const postId = await Post.findByPk( req.params.id);
   
        if (!postId){
            res.status (404).json({ message: "No post found"});
        }
    
    const post = postId.get({ plain: true});
    res.render('edit-post', {layout: "dashboard", post})
    } catch(err){
    console.log(err);
    res.status(500).json(err);
}
});

router.get('/new', (req,res)=> {
    res.render('new-post', {
      layout: "dashboard",
    });
});

module.exports = router; 