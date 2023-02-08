const express = require("express");
const login = require("../Controller/Login");
const AdminRegister = require("../Controller/SignUp");

const router = express.Router();
router.route("/login").post(login);
router.route("/signup").post(AdminRegister);

module.exports = router;
