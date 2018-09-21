const routerC = require("express").Router();
const categoryController = require("../../controllers/categoryController");

//Route:  "/api/conceptFamily"

routerC.get("/findAllCat", categoryController.findAll);
routerC.post("/createCat", categoryController.create);

//Route:  "/api/conceptUses/:id"

// router.route("/:id")
//     .get(instanceController.findById)
//     .put(instanceController.update)
//     .delete(instanceController.remove);

// router.route("/search/instance")
//     .get(instanceController.searchTitle);


//Route


module.exports = routerC;