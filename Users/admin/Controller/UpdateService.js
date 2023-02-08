const DataService = require("../Modals/ServiceSchema");

const updateService = async (req, resp) => {
  const result = await DataService.updateOne(
    { _id: req.params.id },
    {
      $set: req.body,
    },
  );
  resp.send(result);
};

module.exports = updateService;
