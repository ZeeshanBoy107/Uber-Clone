const User = require("../models/user.model");
const BlackListToken = require("../models/blacklistToken.model");
const { createUser } = require("../services/user.service");
const { validationResult } = require("express-validator");

const registerUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { fullname, email, password } = req.body;

  const userExists = await User.findOne({ email });
  if (userExists) {
    return res.status(400).json({ message: "User already exists" });
  }

  try {
    const user = await createUser({
      firstname: fullname.firstname,
      lastname: fullname.lastname,
      email,
      password,
    });
    res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    next(error);
  }
};

const loginUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = user.generateAuthToken();

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
        user,
        message: "User logged in successfully",
      });
  } catch (error) {
    next(error);
  }
};

const userProfile = async (req, res, next) => {
  res.status(200).json({ user: req.user });
};

const logoutUser = async (req, res, next) => {
  res.clearCookie("token");
  const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

  await BlackListToken.create({ token });


  res.status(200).json({ message: "User logged out successfully" });
};

module.exports = { registerUser, loginUser, userProfile, logoutUser };
