const mongoose = require("mongoose");

const CategorySchema = mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
});

const categoryList = mongoose.model("category", CategorySchema);
module.exports = categoryList;
