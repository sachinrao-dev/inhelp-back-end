const loginSchema = require("../Modals/LoginSchema");

const login = async (req, resp) => {
  const admin = await loginSchema.findOne(req.body);
  if (admin) {
    resp.send(admin);
  } else {
    resp.send({ response: "Not Found" });
  }
};

module.exports = login;
