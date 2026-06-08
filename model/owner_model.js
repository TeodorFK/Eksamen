const { Schema, model } = require('mongoose');

const ownerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  number: {
    type: Number,
  },
  pet: {
    type: String,
  },
});

const Owner = model('owner', ownerSchema);

module.exports = Owner;
