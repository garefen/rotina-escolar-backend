require('dotenv/config');
const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const cors = require('cors');

const EraseOldAppointmentsController = require('./controllers/EraseOldAppointmentsController');

const schedule = require('node-schedule');

schedule.scheduleJob('00 00 * * *', EraseOldAppointmentsController.index);

const app = express();
app.use(cors(['http://localhost:3000/', 'https://rotina-escolar.herokuapp.com/']));

app.use(express.json());

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })

app.use(routes);


app.listen(process.env.PORT || 3333);
