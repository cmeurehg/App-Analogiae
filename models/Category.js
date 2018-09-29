const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CategorySchema = new Schema({


    conceptFamily: {
        type: String
    },

    category: String,

    conceptUses: [
        {
            type: Schema.Types.ObjectId,
            ref: "Instance"
        }
    ]

});

const Category = mongoose.model("Category", CategorySchema);

module.exports = Category;
