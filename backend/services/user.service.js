const User = require("../models/user.model");

const createUser = async ({ firstname, lastname, email, password }) => {
  if(!firstname || !email || !password) {
    throw new Error("Please fill all the required fields");
  }

  const userExists = await User.findOne({ email });

  const user = await User.create({ fullname: { firstname, lastname }, email, password });

  return user;
};

module.exports = { createUser };