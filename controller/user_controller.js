const jwt = require('jsonwebtoken');

const { User, verifyPassword } = require('../model/user_model');
const Owner = require('../model/owner_model');
const Pet = require('../model/pet_model');

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

const profile = async (req, res) => {
  try {
    const user = await User.findById(res.locals.user.id);

    const users = await User.find();

    res.render('profile', { user, users });
  } catch (err) {
    console.log(err);
  }
};


module.exports = {
  login_get,
  login_post,
  profile,
};
