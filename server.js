const express = require("express");
const bodyParser = require("body-parser");
const db_connection = require("./src/config/db.config");
const TeamRouter = require("./src/routes/team.routes");
const PlayerRouter = require("./src/routes/player.routes");
const AdminRouter = require("./src/routes/admin.routes");


const app = express();
app.use(bodyParser.json());
app.use(TeamRouter);
app.use(PlayerRouter);
app.use(AdminRouter);

app.listen(3001, async () => {
  console.log("running on port");
  await db_connection();
});
