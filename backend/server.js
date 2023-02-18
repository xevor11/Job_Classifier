const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// db
mongoose
    .connect()
    .then(() => console.log('DB connected'))
    .catch(err => console.log(err));