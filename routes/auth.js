const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");

//REGISTER
router.post("/register", async (req, res, next) => {
  console.log(process.env.SECRET_KEY);
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,

    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.SECRET_KEY
    ).toString(),
  });

  try {
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
