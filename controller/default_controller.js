const Owner = require('../model/owner_model');
const Pet = require('../model/pet_model');

const index = async (req, res) => {
  try {
    const Pets = await Pet.find();
    const Owners = await Owner.find();

    res.render('index', { Pets, Owners });
  } catch (err) {
    console.log(err);
    res.status(500).send('Internal Server Error');
  }
};

module.exports = {
  index,
};
