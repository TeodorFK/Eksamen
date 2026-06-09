const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

require('dotenv').config();

const path = require('path');
const dbHandler = require('./handler/dbhandler');
const default_routes = require('./routes/default_routes');
const user_routes = require('./routes/user_routes');
const pet_routes = require('./routes/pet_routes');
const file_routes = require('./routes/file_routes');
const { checkUser } = require('./middleware/checkUser');

app.set('view engine', 'ejs');

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());

app.use(checkUser);
app.use(file_routes);
app.use(default_routes);
app.use(user_routes);
app.use(pet_routes);

app.listen(process.env.PORT, () => {
  console.log('Succesfully started server');
});

dbHandler.connectToDatabase(process.env.DB);
