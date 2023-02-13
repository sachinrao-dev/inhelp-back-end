const Service = require("../Modals/ServiceSchema");

const DeleteService = async (req, resp) => {
  await Service.deleteOne({ _id: req.params.id });
  resp.send({ response: "successfully service is deleted", status: 200 });
};

module.exports = DeleteService;
