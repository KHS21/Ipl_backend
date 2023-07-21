const express = require("express")
const Playercontroller = require("../controllers/player.controller")

const PlayerRouter = express.Router()

PlayerRouter.get("/player/test", Playercontroller.playerTest)

//create a player
PlayerRouter.post("/player",Playercontroller.createPlayer)

//get all player
PlayerRouter.get("/player", Playercontroller.getAllPlayer)

//get a player
PlayerRouter.get("/player/:playerId", Playercontroller.getAPlayer);

//api to update the player info
PlayerRouter.patch("/player/:playerId", Playercontroller.updatePlayerInfo);

//deleting player
PlayerRouter.delete("/player/:playerId",Playercontroller.deletePlayer)

//add player to a team
PlayerRouter.patch("/team/:teamId/player/:playerId", Playercontroller.addPlayer);




module.exports= PlayerRouter