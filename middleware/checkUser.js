const jwt = require('jsonwebtoken');
const { User } = require('../model/user_model');

const checkUser = async (req, res, next) => {
  const token = req.cookies.jwt;
  try {
    if (token) {
      const decoded = jwt.verify(token, process.env.SECRET_KEY);
      res.locals.user = await User.findById(decoded.id);
    } else {
      res.locals.user = null;
    }
  } catch (err) {
    console.log(err);
    res.locals.user = null;
  }
  next();
};

module.exports = { checkUser };
