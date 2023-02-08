const mongoose = require("mongoose");

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
});
const AddService = mongoose.model("addService", AddServiceSchema);
module.exports = AddService;
