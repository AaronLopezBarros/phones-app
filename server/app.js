require("dotenv/config")


const express = require("express")
const app = express()

require("./config")(app)

const allRoutes = require("./routes")
app.use("/api", allRoutes)


module.exports = app