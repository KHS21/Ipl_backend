const Admin = require("../models/admin.model");
const { generateSalt, hashPassword } = require("../services/password");

const signup = async (req, res) => {
  try {
    const users ={
        "firstName": req.body.firstName,
        "lastName":req.body.lastName,
        "email": req.body.email,
        "contact": req.body.contact
    }

    const salt = generateSalt()
    users.password = hashPassword(req.body.password,salt)

    const user = await Admin.create(users);
    res.json({ msg: user });
  } catch (error) {
    console.log(error)
    res.json({ msg: "server error" });
  }
};

const getAllAdmin = async (req, res) => {
    try {
        const user = await Admin.find();
        res.json({ msg: user });
    }catch (error) {
        res.json({ msg: "server error" });
      }
    };

module.exports = { signup , getAllAdmin};
