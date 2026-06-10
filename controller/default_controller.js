const Owner = require('../model/owner_model');
const Pet = require('../model/pet_model');

const index = async (req, res) => {
  try {
    res.render('index');
  } catch (err) {
    console.log(err);
    res.status(500).send('Internal Server Error');
  }
};

module.exports = {
  index,
};
