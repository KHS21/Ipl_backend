const express = require("express")
const Teamcontroller = require("../controllers/team.controller")

const TeamRouter = express.Router()

TeamRouter.get("/team/test",Teamcontroller.teamTest)

//api to create team
TeamRouter.post("/team",Teamcontroller.createTeam)

//api to get all team
TeamRouter.get("/team",Teamcontroller.getAllTeam)

module.exports= TeamRouter