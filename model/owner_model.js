const { Schema, model } = require('mongoose');

const ownerSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  phone: {
    type: Number,
    required: [true, 'Phone number is required'],
  },
  pet: {
    type: String,
    required: [true, "Owner need's a pet"],
  },
});

ownerSchema.statics.createOwner = async (info) => {
  const newOwner = new Owner({
    name: info.owner,
    phone: info.phone,
    pet: info.pet,
  });
  await newOwner.save();
  return;
};

const Owner = model('owner', ownerSchema);

module.exports = Owner;
