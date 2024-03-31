const express = require("express");
const jwt = require("jsonwebtoken");
const JWT_SECRET = require("../config");
const router = express.Router();
const { signUpMiddleware } = require("./zod/authMiddlewares");
router.get("/signup", signUpMiddleware, async (req, res) => {
  const username = req.body.username;
  console.log(JWT_SECRET);
  console.log(2);
  const token = await jwt.sign(username, JWT_SECRET);
  res.status(200).json({ token: token });
});

module.exports = router;
