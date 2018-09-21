const db = require("../models");

//CRUD methods

module.exports = {


    findAll: function(req, res) {
        console.log("-------------- Reached findAll Categories ------------------");
        db.Category
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
   

    findById: function(req, res) {
        console.log("-------------- Reached findById Category -----------------");
        db.Category
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    
    create: function(req, res) {
        console.log("-------------- Reached create Category -------------------");
        db.Category
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    
    update: function(req, res) {
        console.log("-------------- Reached update Category-------------------");
        db.Category
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },


    remove: function(req, res) {
        console.log("-------------- Reached remove Category-------------------");
        db.Category
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }

};