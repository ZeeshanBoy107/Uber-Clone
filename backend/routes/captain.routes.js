const express = require("express");
const router = express.Router();

const { body } = require("express-validator");
const { registerCaptain, loginCaptain, captainProfile, logoutCaptain } = require("../Controllers/captain.controller.js");
const { authCaptain } = require("../middlewares/auth.middleware.js");

router.post(
  "/register",
  [
    body("fullname.firstname").isLength({ min: 3 }).withMessage("Name should be more than 3 letters long"),
    body("email").isEmail().withMessage("Enter a valid email"),
    body("password").isLength({ min: 6 }).withMessage("Password must be atleast 6 letters long"),
    body("vehicle.color").isLength({ min: 3 }).withMessage("Color should be more than 3 letters long"),
    body("vehicle.plate").isLength({ min: 3 }).withMessage("Registration number plate should be more than 3 letters long"),
    body("vehicle.capacity").isInt({ min: 1 }).withMessage("Capacity must be atleast 1"),
    body("vehicle.vehicleType").isIn(["motorcycle", "car", "auto"]).withMessage("Invalid vehicle type"),
  ],
  registerCaptain
);

router.post("/login",
  [
    body("email").isEmail().withMessage("Enter a valid email"),
    body("password").isLength({ min: 6 }).withMessage("Password must be atleast 6 letters long"),
  ],
  loginCaptain
);

router.get("/profile", authCaptain, captainProfile);

router.get("/logout", authCaptain, logoutCaptain);

module.exports = router;