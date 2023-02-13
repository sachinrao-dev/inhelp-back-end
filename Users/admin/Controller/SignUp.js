const AdminRegister = require("../Modals/LoginSchema");

const register = async (req, resp) => {
  const FilterData = await AdminRegister.findOne({ email: req.body.email });
  if (!FilterData) {
    const data = new AdminRegister(req.body);
    await data.save();
    resp.send({ response: "register successfully", status: 200 });
  } else {
    resp.send({ response: " already available this user" });
  }
};

module.exports = register;
