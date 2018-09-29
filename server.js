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
if (process.env.NODE_ENV === "production") {
    app.use(express.static("front"));
}

//Using the API and View(front/public...) routes
app.use("/", htmlRoutes);
app.use("/api", apiRoutes);

//Setting up the connection to MongoDB
mongoose.set('useCreateIndex', true);
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/categories");

//Starting the API server
app.listen(PORT, function() {
    console.log(`Success! API Server listening on PORT ${PORT}!`);
});