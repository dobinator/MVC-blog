const router = require('express').Router();
const { User, Post, Comment} = require('../models');
const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {
  try {
    const userData = await Post.findAll({
      // attributes: { exclude: ['password'] },
      // order: [['name', 'ASC']],
  include: [User]

    });

    const users = userData.map((project) => project.get({ plain: true }));

    res.render('home', {
      posts: users,
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


router.get ('/login', (req, res) =>{
if ( req.session.loggedIn === true){
  res.redirect("/")
  return
}
res.render ("login")
})



router.get ('/signup', (req, res) =>{
  if ( req.session.loggedIn === true){
    res.redirect("/")
    return
  }
  res.render ("signup")
  });




module.exports = router;
