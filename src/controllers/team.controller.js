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
  const response = await Team.find();
  res.json({ msg: response });
};

module.exports = { teamTest, createTeam, getAllTeam };
