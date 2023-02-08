const AdminRegister = require("../Modals/LoginSchema");

const register = async (req, resp) => {
  const FilterData = await AdminRegister.findOne({ email: req.body.email });
  if (!FilterData) {
    const data = new AdminRegister(req.body);
    await data.save();
    resp.send("register successfully");
  } else {
    resp.send(" already available this user");
  }
};

module.exports = register;
