const express = require("express");
const AdminRouter = express.Router();
const Admincontroller = require("../controllers/admin.controller");


//create admin or signup api
AdminRouter.post("/admin/signup",Admincontroller.signup)

//get all signup api
AdminRouter.get("/admin/signup",Admincontroller.getAllAdmin)


module.exports= AdminRouter

