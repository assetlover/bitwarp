const z = require("zod");
const { signupSchema, signinSchema } = require("./schemas");
async function signUpMiddleware(req, res, next) {
  const username = req.body.username;
  const name = req.body.name;
  const password = req.body.password;
  const email = req.body.email;
  const userData = {
    username: username,
    name: name,
    email: email,
    password: password,
  };

  const paresPayload = signupSchema.safeParse(userData);
  if (paresPayload.success) {
    next();
  } else {
    res.status(404).json({ msg: "Error in input credentials" });
  }
}
module.exports = { signUpMiddleware };
