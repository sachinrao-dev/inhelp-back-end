const express = require("express");
const Dashboard = require("../Controller/Dashboard");
const SearchService = require("../Controller/SearchModule");
const RatingModule = require("../Controller/RatingModule");
const CommentModule = require("../Controller/CommentModule");

const router = express.Router();
router.route("/dashboard").get(Dashboard);
router.route("/search/:key").get(SearchService);
router.route("/comment/:id").post(CommentModule);
router.route("/rating/:id").post(RatingModule);

module.exports = router;
