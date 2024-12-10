const Captain = require("../models/captain.model");
const BlackListToken = require("../models/blacklistToken.model");
const { validationResult } = require("express-validator");

const { createCaptain } = require("../services/captain.service");

const registerCaptain = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { fullname, email, password, vehicle } = req.body;

  const captainExists = await Captain.findOne({ email });
  if (captainExists) {
    return res.status(400).json({ message: "Captain already exists" });
  }
  try {
    const captain = await createCaptain({
      firstname: fullname.firstname,
      lastname: fullname.lastname,
      email,
      password,
      color: vehicle.color,
      plate: vehicle.plate,
      capacity: vehicle.capacity,
      vehicleType: vehicle.vehicleType,
    });
    res
      .status(201)
      .json({ message: "Captain registered successfully", captain });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const loginCaptain = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;
  const captain = await Captain.findOne({ email }).select("+password");
  if (!captain) {
    return res.status(400).json({ message: "Captain does not exist" });
  }
  const isMatch = await captain.isPasswordCorrect(password);
  if (!isMatch) {
    return res.status(400).json({ message: "Invalid credentials" });
  }
  const token = captain.generateAuthToken();

  const options = {
    httpOnly: true,
    secure: true,
    sameSite: "none",
  };

  res
    .status(200)
    .cookie("token", token, options)
    .json({ 
      token: token,
      captain, 
      message: "User Logged Successfully" 
    });
};

const captainProfile = async (req, res, next) => {
  res.status(200).json({ captain: req.captain });
};

const logoutCaptain = async (req, res) => {
  res.clearCookie("token");
  const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

  await BlackListToken.create({ token });

  res.status(200).json({ message: "Captain logged out successfully" });
};

module.exports = { registerCaptain, loginCaptain, captainProfile, logoutCaptain };
