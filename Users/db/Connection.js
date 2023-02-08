const mongoose = require("mongoose");

mongoose.set("strictQuery", false);
const MongooseDb = (uri) => mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = MongooseDb;
