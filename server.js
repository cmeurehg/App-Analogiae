const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

//For serving static assets in Heroku
if (process.env.NODE_ENV === "production") {
    app.use(express.static("public"));
}

//Using the API and View routes
app.use(routes);

//Setting up the connection to MongoDB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/categories");

//Starting the API server
app.listen(PORT, function() {
    console.log(`Success! API Server listening on PORT ${PORT}!`);
});