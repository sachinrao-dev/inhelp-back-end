const mongoose = require("mongoose");

const { Schema } = mongoose;

const AddServiceSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
  ratings: [{ type: Schema.Types.ObjectId, ref: "Rating" }],

});
const AddService = mongoose.model("addService", AddServiceSchema);
module.exports = AddService;
