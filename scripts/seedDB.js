const mongoose = require('mongoose');
require('dotenv').config();

const { User } = require('../model/user_model.js');

async function seed() {
  try {
    await mongoose.connect(process.env.DB);
    console.log('connected to db');

    console.log('Starting seeding...');

    await Promise.all([User.deleteMany({})]);

    //opprett brukere
    const Users = await User.create([
      { username: 'bamse', password: 'test123' },
      { username: 'computer', password: 'test123' },
      { username: 'sensor', password: 'test123' },
      { username: 'seal', password: 'test123' },
      { username: 'Geir', password: 'test123' },
      { username: 'extra', password: 'test123' },
    ]);
    console.log('Brukere opprettet');

    console.log('Seeding complete!');
    process.exit(0);
  } catch (error) {
    console.log('Error during DB seeding', error);
    process.exit(1);
  }
}

seed();
