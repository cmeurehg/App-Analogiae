const router = require("express").Router();
const instanceRoutes = require("./instance");

router.use("/instance", instanceRoutes);

module.exports = router;

