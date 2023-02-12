const CategoryList = require("../Modals/CategoryList");

const listCategory = async (req, resp) => {
  const filterCategory = await CategoryList.find({ category: req.body.category });
  if (!filterCategory.length) {
    const data = new CategoryList(req.body);
    await data.save();
    resp.send({ response: "category successfully added" });
  } else {
    resp.send({ response: "category is already available" });
  }
};

module.exports = listCategory;
