const getService = require("../../admin/Modals/ServiceSchema");

const Dashboard = async (req, resp) => {
  const result = await getService.find({});
  resp.send(result);
};

module.exports = Dashboard;
