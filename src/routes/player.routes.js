const express = require("express")
const Playercontroller = require("../controllers/player.controller")

const PlayerRouter = express.Router()

PlayerRouter.get("/player/test", Playercontroller.playerTest)

module.exports= PlayerRouter