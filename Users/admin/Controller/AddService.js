const ServiceSch = require("../Modals/ServiceSchema");

const AddService = async (req, resp) => {
  const FilterUser = ServiceSch.findOne({
    name: req.body.name,
    email: req.body.email,
    description: req.body.description,
  });
  if (!FilterUser.length) {
    const data = new ServiceSch(req.body);
    await data.save();
    resp.send({ response: "service successfully added", status: 200 });
  } else {
    resp.send({ response: "This Service is already available" });
  }
};

module.exports = AddService;
