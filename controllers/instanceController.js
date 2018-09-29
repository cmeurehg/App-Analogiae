const db = require("../models");

//CRUD methods

module.exports = {

 

    findAll: function(req, res) {
        console.log("-------------- Reached findAll Instances ------------------");
        db.Instance
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    

    findRelations: function(req, res) {
        console.log("-------------- Reached findById Instance -----------------");
        // let relation = 
        // db.Instance
        //     .find({
        //         affinity: 
        //     }),
        //     .then(dbModel => res.json(dbModel))
        //     .catch(err => res.status(422).json(err));
    },

   
    create: function(req, res) {
        console.log("-------------- Reached create Instance -------------------");
        db.Instance
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
        //TODO::Link Instance to Category here
    },

    
    update: function(req, res) {
        console.log("-------------- Reached update Instance -------------------");
        db.Instance
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    

    remove: function(req, res) {
        console.log("-------------- Reached remove Instance-------------------");
        db.Instance
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }

};