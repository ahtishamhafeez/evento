// ./src/index.js
// importing the dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();
app.use(helmet());
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'));
const db = require('./connection'); 
const indexRoutes = require('../src/routes/indexRoutes.js');
const categoriesRoutes = require('../src/routes/categoriesRoutes.js');
app.get('/', indexRoutes)
app.get('/categories/:id', categoriesRoutes)
app.post('/categories', categoriesRoutes)
app.get('/categories', categoriesRoutes)

// starting the server
app.listen(3001, () => {});