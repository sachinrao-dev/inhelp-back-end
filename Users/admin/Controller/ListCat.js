const catList = require("../Modals/CategoryList");

const CatList = async (req, resp) => {
  const result = await catList.find({});
  resp.send(result);
};

module.exports = CatList;
