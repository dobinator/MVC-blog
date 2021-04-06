const router = require('express').Router();
const { User, Post, Comment} = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    const userData = await Post.findAll({
      // attributes: { exclude: ['password'] },
      // order: [['name', 'ASC']],
  include: [User]

    });

    const users = userData.map((project) => project.get({ plain: true }));

    res.render('all-posts', {
      users,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/post/:id', async (req, res) => {
  // if (req.session.logged_in) {
  //   res.redirect('/');
  //   return;
  // }

  // res.render('login');
  try{
 const data = await Post.findByPk(req.params.id, {
   include: [User,{
     model: Comment, include: [User]
   }]
 })
if (data === true){
  const post = data.get({ plain:true })
  res.render( "single-post", { post})
} else{
  res.end()
}
  }catch (err){res.json(err)}
});

module.exports = router;
