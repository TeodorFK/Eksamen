const { Schema, model } = require('mongoose');

const petSchema = new Schema({
  name: {
    type: String,
    required: [true, "Pet name is required"],
  },
  species: {
    type: String,
    required: [true, "species is required"],
  },
  owner: {
    type: String,
    required: [true, "Owner's name is required"],
  },
  vet: {
    type: String,
    required: [true, "Vetrenarian's name is required"],
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
