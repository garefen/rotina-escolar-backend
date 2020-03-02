const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

require('dotenv/config');
const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const cors = require('cors');

const EraseOldAppointmentsController = require('./controllers/EraseOldAppointmentsController');

const schedule = require('node-schedule');

schedule.scheduleJob('00 00 * * *', EraseOldAppointmentsController.index);

const app = express();
app.use(cors());

app.use(express.json());

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })

app.use(routes);


app.listen(5000);
exports.app = functions.https.onRequest(app);
