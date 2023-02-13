const loginSchema = require("../Modals/LoginSchema");

const login = async (req, resp) => {
  const admin = await loginSchema.findOne(req.body);
  if (admin) {
    resp.send({ admin, status: 200, response: "login successfully" });
  } else {
    resp.send({ response: "Not Found" });
  }
};

module.exports = login;
