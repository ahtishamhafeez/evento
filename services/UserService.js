const User = require("../models/User");
const bcrypt = require('bcrypt');
require("dotenv").config();
const jwt = require("jsonwebtoken");

exports.getAllUsers = async (request) => {
  return await User.find();
};

exports.createUser = async (user) => {
  return await User.create(user);
};
exports.getUserById = async (id) => {
  return await User.findById(id);
};

exports.updateUser = async (id, user) => {
  return await User.findByIdAndUpdate(id, user);
};

exports.deleteUser = async (id) => {
  return await User.findByIdAndDelete(id);
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!(email && password)) {
      return res.status(400).send("All input is required");
    }
    const user = await User.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
      const payload = {
        userfirstname: user.first_name,
        username: user.email,
        phone_number: user.phone_number
      };

      const token = jwt.sign(payload, process.env.JWT_TOKEN_KEY, { expiresIn: "2h" }
      );
      user.token = token;
      return res.status(200).json(user);
    }
  } catch (err) {
    console.log(err);
  }
}

exports.registerUser = async (req, res) => {
  try {
    const { first_name, last_name, email, password, phone_number, confirm_password } = req.body;
    if (!(email && password && first_name && last_name)) {
      return res.status(400).json("All input is required");
    }
    const oldUser = await User.findOne({ email });

    if (oldUser) {
      return res.status(409).json("User Already Exist. Please Login");
    }
    if (password !== confirm_password) {
      return res.status(400).json("password does not match")
    }
    encryptedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      first_name,
      last_name,
      email: email.toLowerCase(),
      password: encryptedPassword,
      confirm_password: encryptedPassword,
      phone_number: phone_number
    }).then((newUser) => {
      const payload = {
        userfirstname: newUser.first_name,
        username: newUser.email,
        phone_number: newUser.phone_number
      };

      const token = jwt.sign(payload, process.env.JWT_TOKEN_KEY, { expiresIn: "2h" }
      );
      newUser.token = token;
      newUser.save()
      return res.status(201).json(newUser)
    }).catch((error) => {
    });
  } catch (err) {
    res.status(500)
  }
};
