const express = require('express');
const router = express.Router();

const { body } = require("express-validator")
const { registerUser, loginUser, userProfile, logoutUser } = require("../Controllers/user.controller.js")
const authUser = require("../middlewares/auth.middleware.js")

router.post("/register", [
  body("fullname.firstname").isLength({min: 3}).withMessage("First name should be more than 3 letters long"),
  body("email").isEmail().withMessage("Enter a valid email"),
  body("password").isLength({min: 6}).withMessage("Password must be atleast 6 letters long"),
],
  registerUser
)

router.post("/login", [
  body("email").isEmail().withMessage("Enter a valid email"),
  body("password").isLength({min: 6}).withMessage("Password must be atleast 6 letters long"),
],
  loginUser
)

router.get("/profile", authUser, userProfile);

router.get("/logout", authUser, logoutUser);


module.exports = router;