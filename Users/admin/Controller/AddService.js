const ServiceSch = require("../Modals/ServiceSchema");

const AddService = async (req, resp) => {
  const FilterUser = ServiceSch.findOne({
    name: req.body.name,
    email: req.body.email,
    description: req.body.description,
  });
  if (!FilterUser) {
    const data = new ServiceSch(req.body);
    await data.save();
    resp.send("service successfully added");
  } else {
    resp.send("This Service is already available");
  }
};

module.exports = AddService;
