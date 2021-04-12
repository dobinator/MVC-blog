const router = require("express").Router();
const sequelize = require('../config/connection.js');
const { Post } = require("../models");
const withAuth = require("../utils/helpers");

router.get("/", withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      where: {
        user_id: req.session.user_id,
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

router.get('/new', async (req,res)=> {
    res.render('new-post', {
      layout: "dashboard",
    });
});

module.exports = router; 