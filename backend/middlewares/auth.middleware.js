const User = require('../models/user.model');
const BlackListToken = require('../models/blackListToken.model');
const jwt = require('jsonwebtoken');

authUser = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];;

  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  if(await BlackListToken.findOne({ token: token })) {
    return res.status(401).json({ message: 'Token is not valid' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = await User.findById(decoded.id);
    next();
  } catch (error) {
    res.status(401).json({ message: 'Token is not valid' });
  }
};

module.exports = authUser;
