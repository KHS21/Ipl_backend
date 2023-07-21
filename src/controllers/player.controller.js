const Player = require("../models/player.models");
const Team = require("../models/team.models");

const playerTest = async (req, res) => {
  res.json({ Message: "player test message" });
};

const createPlayer = async (req, res) => {
  const player = req.body;
  const response = await Player.create(player);
  res.json({ Message: response });
};

const getAllPlayer = async (req, res) => {
  const response = await Player.find();
  res.json({ Message: response });
};

const getAPlayer = async (req, res) => {
  try {
    const playerId = req.params.playerId;
    const response = await Player.findById(playerId);
    if (response) {
      res.json({ msg: response });
    } else {
      res.json({ msg: "id is not correct" });
    }
  } catch (error) {
    res.json({ msg: "internal server error" });
  }
};

const updatePlayerInfo = async (req, res) => {
    try {
      const playerId = req.params.playerId;
      const player = await Player.findById(playerId);
      if (player) {
        // console.log(player);
        player.age = req.body.age || player.age
        player.totalMatches = req.body.totalMatches || player.totalMatches
        player.money = req.body.money ||  player.money

        await player.save();     //update and save the player info in db
        res.json({msg:player})
        res.json(player);
      } else {
        res.json({ msg: "player id not found" });
      }
  } catch (error) {}
};

const deletePlayer = async (req, res) => {
    try{
       
      const player = await Player.findById(req.params.playerId);
      if(player){
        const player = await Player.deleteOne({_id:req.params.playerId});
        res.json({msg:player})
      }else {
        res.json({ msg: "player id not found" });
      }
    }catch(error){}
}

const addPlayer = async (req, res) => {
  try {
    const team = await Team.findById(req.params.teamId);
    if (team) {
      const player = await Player.findById(req.params.playerId);
      if (player) {
        console.log(team);
        
        team.players.push(player._id);
        await team.save();
        res.json({ msg: "Player added to the team successfully", team });
      } else {
        res.json({ msg: "Player id not found" });
      }
    } else {
      res.json({ msg: "Team id not found" });
    }
  } catch (error) {
    res.status(500).json({ msg: "Server error" });
  }
};



module.exports = {
  playerTest,
  createPlayer,
  getAllPlayer,
  getAPlayer,
  updatePlayerInfo,
  deletePlayer,
  addPlayer
};
