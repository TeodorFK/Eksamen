const { Schema, model } = require('mongoose');
const argon2 = require('argon2');

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.pre('save', async function () {
  this.password = await argon2.hash(this.password);
});

async function verifyPassword(user, enteredPassword) {
  try {
    return await argon2.verify(user.password, enteredPassword);
  } catch (err) {
    console.log(err);
  }
}

const User = model('user', userSchema);

module.exports = { User, verifyPassword };
