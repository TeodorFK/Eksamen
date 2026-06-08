const { Schema, model } = require('mongoose');

const petSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  species: {
    type: String,
    required: true,
  },
  owner: {
    type: String,
    required: true,
  },
  vet: {
    type: String,
    required: true,
  },
});

petSchema.statics.createPet = async (info) => {
  const newPet = new Pet({
    name: info.pet,
    species: info.species,
    owner: info.owner,
    vet: info.vet,
  });
  await newPet.save();
  return;
};

const Pet = model('pet', petSchema);

module.exports = Pet;
