const router = require("express").Router();
const instanceController = require("../../controllers/instanceController");

//Route:  "/api/conceptUses"

router.get("/findAll", instanceController.findAll );
router.post("/create", instanceController.create);

//Route:  "/api/conceptUses/:id"

// router.route("/:id")
//     .get(instanceController.findById)
//     .put(instanceController.update)
//     .delete(instanceController.remove);

// router.route("/search/instance")
//     .get(instanceController.searchTitle);


module.exports = router;