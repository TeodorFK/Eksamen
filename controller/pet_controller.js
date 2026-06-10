const { User } = require('../model/user_model');
const Pet = require('../model/pet_model');
const Owner = require('../model/owner_model');

const petAndOwner = async (req, res) => {
  try {
    await Pet.createPet(req.body);
    await Owner.createOwner(req.body);

    res.redirect('/');
  } catch (err) {
    console.log(err);
    res.send("Couldn't create Pet and Owner, because of error's");
  }
};

const update_get = async (req, res) => {
  try {
    const pet = await Pet.findById(req.params.pet);
    const user = await User.find();

    console.log(pet);
    res.render('update', { pet, user });
  } catch (err) {
    console.log(err);
  }
};

const update_post = async (req, res) => {
  const info = req.body;

  try {
    await Pet.findByIdAndUpdate(req.params.pet, {
      name: info.pet,
      species: info.species,
      owner: info.owner,
      vet: info.vet,
    });

    res.redirect('/');
  } catch (err) {
    console.log(err);
  }
};

const remove_pet = async (req, res) => {
  try {
    await Pet.findByIdAndDelete(req.params.pet);

    res.redirect('/');
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  petAndOwner,
  update_get,
  update_post,
  remove_pet,
};
