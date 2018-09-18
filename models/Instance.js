const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const InstanceSchema = new Schema({
    instance: String,
    author: String,
    code: String,
    affinity: String,
    function: String,
    languageGame: String
});

const Instance = mongoose.model("Instance", InstanceSchema);

module.exports = Instance;
