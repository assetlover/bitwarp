const z = require("zod");
const signupSchema = z.object({
  username: z.string().min(2),
  name: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(8),
});
const signinSchema = z.object({
  username: z.string().min(2),
  name: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(8),
});
module.exports = { signupSchema, signinSchema };
