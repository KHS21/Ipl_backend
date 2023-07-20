const mongoose = require("mongoose");
require("dotenv").config();

console.log(process.env.DB_URL);
console.log(process.env.NAME)

const db_url =process.env.DB_URL;

const db_connection = async () => {
  await mongoose.connect(db_url);
  console.log("DB established");
};

module.exports = db_connection;
