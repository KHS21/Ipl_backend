const Team = require("../models/team.models");

const teamTest = async (req, res) => {
  res.json({ Message: "team test message" });
};

const createTeam = async (req, res) => {
  const team = req.body;
  console.log(team);
  const response = await Team.create(team); //inserting

  res.json({ msg: response });
};

const getAllTeam = async (req, res) => {
  const response = await Team.find().populate("players");
  res.json({ msg: response });
};

const getATeam = async (req, res) => {
  const teamId = req.params.teamId
  const response = await Team.findById(teamId);
  res.json({ msg: response });
}

const getTeamWithID  = async (req, res) => {
  try{
    const team = await Team.findById(req.params.teamId).populate("players")

    if(team){
      res.json({ msg: team });
    }else{
      res.json({ msg: "team id not found" });
    }

  }catch(error){}
}

module.exports = { teamTest, createTeam, getAllTeam,getATeam ,getTeamWithID};
