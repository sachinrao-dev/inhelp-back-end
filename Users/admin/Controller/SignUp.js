const AdminRegister = require("../Modals/LoginSchema");

const register = async (req, resp) => {
  const data = new AdminRegister(req.body);
  await data.save();
  resp.send("register successfully");
};

module.exports = register;
