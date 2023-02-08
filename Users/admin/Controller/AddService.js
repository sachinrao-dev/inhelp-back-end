const ServiceSch = require("../Modals/ServiceSchema");

const AddService = async (req, resp) => {
  const data = new ServiceSch(req.body);
  await data.save();
  resp.send("service successfully added");
};

module.exports = AddService;
