const mongoose = require("mongoose");

const db_url =
  "mongodb+srv://kk9490829:8073277482@cluster0.j6zispw.mongodb.net/?retryWrites=true&w=majority";

const db_connection = async () => {
  await mongoose.connect(db_url);
  console.log("DB established");
};

module.exports = db_connection;
