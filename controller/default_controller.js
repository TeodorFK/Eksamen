const Pet = require('../model/pet_model');

const index = async (req, res) => {
  try {
    const Pets = await Pet.find();

    res.render('index', { Pets });
  } catch (err) {
    console.log(err);
    res.status(500).send('Internal Server Error');
  }
};

module.exports = {
  index,
};
