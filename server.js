const express = require('express');
const app = express();
const cors = require('cors');
const logger = require('morgan');

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(logger('dev'));

const forteRouter = require('./controllers/info');
app.use('/api/', forteRouter);

app.listen(4000, ()=> console.log('Server running on port 4000!'))