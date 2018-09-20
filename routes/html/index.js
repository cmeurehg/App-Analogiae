const path = require("path");
const router = require("express").Router();

// const dir

//API Routes



router.get( '/', function(req, res) {
    res.sendFile(path.join( __dirname, "../../front/public/index.html"));
});

module.exports = router;

