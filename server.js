const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

var axios = require("axios");
var cheerio = require("cheerio");

// Require all models
const db = require("./models");

const PORT = process.env.PORT || 3000;

// Initialize Express
const app = express();

// Use morgan logger for logging requests
app.use(logger("dev"));
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));

const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout:'main'}));
app.set('view engine', 'handlebars');

// Connect to the Mongo DB
let MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true }, (error) => {
	if (!error) {console.log("Connected!");}
	else (console.log('mongoose error: ' + error));
});

const routes = require('./routes/index');

app.use(routes);

//var syncOptions = { force: false };

app.listen(PORT, function() {
	console.log(`Listening on http://localhost:${PORT}`);
});