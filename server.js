const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const htmlRoutes = require('./routes/html/index.js');
const apiRoutes = require('./routes/api/index.js');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());




//For serving static assets in Heroku

app.use(express.static("front"));

const databaseUri = "mongodb://localhost/categories";

if (process.env.MONGODB_URI) {
    mongoose.connect(process.env.MONGODB_URI);
} else {
    mongoose.connect(databaseUri);
};

mongoose.set('useCreateIndex', true);
//mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/categories");
const db = mongoose.connection;
db.on("error", function (err) {
    console.log ("Mongoose error: ", err);
});


//Using the API and View(front/public...) routes
app.use("/", htmlRoutes);
app.use("/api", apiRoutes);

//Starting the API server
app.listen(PORT, function() {
    console.log(`Success! API Server listening on PORT ${PORT}!`);
});