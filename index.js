'use strict';
const express = require('express');
const cors = require('cors');
const multer = require('multer');
const bodyParser = require('body-parser');
const config = require('./config');
const employeeRoutes = require('./routes/employee-routes');

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', employeeRoutes.routes);



app.listen(config.port, () => console.log('App is listening on url http://localhost:' + config.port));
