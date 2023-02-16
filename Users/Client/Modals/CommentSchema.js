const mongoose = require("mongoose");

const CommentSchema = mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    // nameBy: {
    //   type: String,
    //   required: true,
    // },
  },
  { timestamps: true },
);

const comment = mongoose.model("Comment", CommentSchema);
module.exports = comment;
