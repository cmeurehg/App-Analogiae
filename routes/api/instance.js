const router = require("express").Router();
const instanceController = require("../../controllers/instanceController");

//Route:  "/api/conceptUses"

router.route("/")
    .get(instanceController.findAll)
    .post(instanceController.create);

//Route:  "/api/conceptUses/:id"

router.route("/:id")
    .get(instanceController.findById)
    .put(instanceController.update)
    .delete(instanceController.remove);

// router.route("/search/instance")
//     .get(instanceController.searchTitle);


module.exports = router;