const jwt = require('jsonwebtoken');

const { User, verifyPassword } = require('../model/user_model');

const createToken = (id) => {
  return jwt.sign({ id }, process.env.SECRET_KEY, { expiresIn: 3 * 60 * 60 });
};

const login_get = (req, res) => {
  try {
    res.render('login');
  } catch (err) {
    console.log(err);
    res.status(500).send('Internal Server Error');
  }
};

const login_post = async (req, res) => {
  const { username, password } = req.body;
  try {
    const foundUser = await User.findOne({ username });

    const isValid = await verifyPassword(foundUser, password);
    if (!isValid) {
      console.log('Password or username is incorrect');
      return res.redirect('/');
    }
    const token = createToken(foundUser._id);

    res.cookie('jwt', token, { httpOnly: true, maxAge: 1000 * 1000 });
    res.redirect('/');
  } catch (err) {
    console.log(err);
    res.status(400).json({ err });
  }
};

module.exports = {
  login_get,
  login_post,
};
