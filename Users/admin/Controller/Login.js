const loginSchema = require("../Modals/LoginSchema");

const login = async (req, resp) => {
  const admin = await loginSchema.findOne(req.body);
  if (!req.body.email && req.body.password) {
    if (admin) {
      resp.send(admin);
    } else {
      resp.send({ response: "no user available" });
    }
  } else {
    resp.send(" please enter email and password");
  }
};

module.exports = login;
