const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
// const dir

//API Routes

router.use("/api", apiRoutes);

router.use(function(req, res) {
    res.sendFile(path.join( __dirname, "../front/public/index.html"));
});

module.exports = router;

