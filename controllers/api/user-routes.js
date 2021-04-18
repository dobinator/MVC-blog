const router = require('express').Router();
const { User } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', async (req, res)=> {
try {
  const userData = await User.create(req.body);
  req.session.save(() => {
    req.session.userId = userData.id;
    req.session.logged_in = true;
    
    res.json({ user: userData, message: 'Welcome, you are now signed up!' });
  });
 
} catch(err){
 res.status(400).json(err);
}
}
)




//expects email &password
router.post('/login', async (req, res) => {
  console.log("hello")
  try {
    const userData = await User.findOne({ where: { username: req.body.username } });
// if wrong email
    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect username or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);
// if email is password is not valid
    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }
// if the email and password are correct
    req.session.save(() => {
      req.session.userId = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});
// if the login times out
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

router.put('/', withAuth, async (req, res)=> {
try {
const updatedUserData = await User.update(re.body, {
  where: {
    id: req.session.userId,
  }
})
res.json(updatedUserData)
} catch (err){
  res.status(500).json(err.errors[0].message)
}
})

module.exports = router;
