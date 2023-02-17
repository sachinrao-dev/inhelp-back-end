const mongoose = require("mongoose");

const RatingSchema = mongoose.Schema({
  rating: {
    type: Number,
    required: true,
  },
});

const rating = mongoose.model("Rating", RatingSchema);
module.exports = rating;
