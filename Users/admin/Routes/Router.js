const express = require("express");
const login = require("../Controller/Login");
const AdminRegister = require("../Controller/SignUp");
const serviceAdd = require("../Controller/AddService");
const updateSer = require("../Controller/UpdateService");
const ServiceList = require("../Controller/ServiceList");
const AddCat = require("../Controller/AddCategory");
const listCat = require("../Controller/ListCat");
const deleteService = require("../Controller/DeleteService");

const router = express.Router();
router.route("/login").post(login);
router.route("/signup").post(AdminRegister);
router.route("/addService").post(serviceAdd);
router.route("/updateService/:id").put(updateSer);
router.route("/serviceList").get(ServiceList);
router.route("/addCategory").post(AddCat);
router.route("/listCategory").get(listCat);
router.route("/deleteService/:id").delete(deleteService);

module.exports = router;
