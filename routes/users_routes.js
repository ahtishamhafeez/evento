const express = require("express");
const auth = require("../middleware/auth");
const {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
  registerUser,
  loginUser
} = require("../controllers/UsersController");
const router = express.Router();

router.route("/").get(auth, getAllUsers);
router.route("/").post(auth, createUser);
router.route("/register").post(registerUser);
router.route("/auth").post(loginUser);
router.route("/:id").get(auth, getUserById)
router.route("/:id").put(auth, updateUser)
router.route("/:id").delete(auth, deleteUser);

module.exports = router;
