const router = require("express").Router();
const instanceRoutes = require("./instance");
const categoryRoutes = require("./category")

router.use("/instance", instanceRoutes);
router.use("/category", categoryRoutes);

module.exports = router;

