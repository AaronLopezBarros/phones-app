const router = require("express").Router();

const phoneRoutes = require("./phone.routes");
router.use("/", phoneRoutes);

module.exports = router;