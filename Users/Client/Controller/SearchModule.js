const service = require("../../admin/Modals/ServiceSchema");

const SearchModule = async (req, resp) => {
  const result = await service.find({
    $or: [
      { name: { $regex: req.params.key } },
      { category: { $regex: req.params.key } },
      { description: { $regex: req.params.key } },

    ],
  });
  resp.send(result);
};

module.exports = SearchModule;
