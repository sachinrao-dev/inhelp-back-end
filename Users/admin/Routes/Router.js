const express = require("express");
const login = require("../Controller/Login");
const AdminRegister = require("../Controller/SignUp");
const serviceAdd = require("../Controller/AddService");

const router = express.Router();
router.route("/login").post(login);
router.route("/signup").post(AdminRegister);
router.route("/addService").post(serviceAdd);

module.exports = router;
