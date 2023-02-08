const loginSchema = require("../Modals/LoginSchema");

const login = async (req, resp) => {
  const admin = await loginSchema.findOne(req.body);
  console.log("called function");
  if (admin) {
    resp.send(admin);
  } else {
    resp.send({ response: "no user available" });
  }
};

module.exports = login;
