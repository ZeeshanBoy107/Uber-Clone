const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const captainSchema = new mongoose.Schema({
  fullname: {
    firstname: {
      type: String,
      required: true,
      minLength: [3, "First name must be atleast 3 letters long"],
    },
    lastname: {
      type: String,
      minLength: [3, "Last name must be atleast 3 letters long"],
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    minLength: [5, "Email must be atleast 5 letters long"],
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  socketId: {
    type: String,
    default: "",
  },
  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "inactive",
  },
  vehicle: {
    color: {
      type: String,
      required: true,
      minLength: [3, "Vehicle color must be atleast 3 letters long"],
    },
    plate: {
      type: String,
      required: true,
      minLength: [3, "Vehicle number must be atleast 3 letters long"],
    },
    capacity: {
      type: Number,
      required: true,
    },
    vehicleType: {
      type: String,
      required: true,
      enum: ["motorcycle", "car", "auto"],
    }
  },

  location: {
    lat: {
      type: Number
    },
    lng: {
      type: Number
    },
  }
}, {timestamps: true});

captainSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 10);
  next();
});

captainSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

captainSchema.methods.generateAuthToken = function () {
  return jwt.sign(
    {
      id: this._id,
    },
    process.env.JWT_SECRET_KEY,
    {
      expiresIn: process.env.JWT_EXPIRE,
    }
  );
};

const Captain = mongoose.model("Captain", captainSchema);

module.exports = Captain;