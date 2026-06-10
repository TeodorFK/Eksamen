const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
  const token = req.cookies?.jwt;
  if (!token) {
    console.log(token);
    return res.redirect('/login');
  } else {
  }
  jwt.verify(token, process.env.SECRET_KEY, (err) => {
    if (err) {
      console.log(err.message);
      res.redirect('/login');
    } else {
      next();
    }
  });
};

module.exports = authenticate;
