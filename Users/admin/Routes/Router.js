const express = require("express");
const login = require("../Controller/Login");
const AdminRegister = require("../Controller/SignUp");
const serviceAdd = require("../Controller/AddService");
const updateSer = require("../Controller/UpdateService");

const router = express.Router();
router.route("/login").post(login);
router.route("/signup").post(AdminRegister);
router.route("/addService").post(serviceAdd);
router.route("/updateService/:id").put(updateSer);

module.exports = router;
