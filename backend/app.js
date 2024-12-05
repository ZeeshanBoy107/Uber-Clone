const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const cookieParser = require('cookie-parser');
const cors = require("cors");
const connectToDB = require('./db/db.js');

const app = express();

connectToDB();

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const userRoutes = require('./routes/user.routes.js');

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/users', userRoutes);

module.exports = app;