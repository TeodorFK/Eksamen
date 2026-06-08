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

const Pet = model('pet', petSchema);

module.exports = Pet;
