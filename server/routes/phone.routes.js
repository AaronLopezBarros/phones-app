const router = require("express").Router();
const phones = require("../phones.json");

router.get("/phones", (req, res, next) => {
    res.status(200).json({phones});
})

module.exports = router;