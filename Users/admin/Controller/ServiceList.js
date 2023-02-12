const ServiceList = require("../Modals/ServiceSchema");

const GetEventList = async (req, resp) => {
  const result = await ServiceList.find({});
  resp.status(200).json(result);
};

module.exports = GetEventList;
