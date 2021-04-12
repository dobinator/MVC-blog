const router = require('express').Router();
const { User } = require('../../models');
const withAuth = require('../..utils/helpers');

//expects email &password
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });
// if wrong email
    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
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
      req.session.user_id = userData.id;
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
    id: req.session.user_id,
  }
})
res.json(updatedUserData)
} catch (err){
  res.status(500).json(err.errors[0].message)
}
})

module.exports = router;
