const express = require("express");
const Dashboard = require("../Controller/Dashboard");
const SearchService = require("../Controller/SearchModule");

const router = express.Router();
router.route("/dashboard").get(Dashboard);
router.route("/search/:key").get(SearchService);

module.exports = router;
