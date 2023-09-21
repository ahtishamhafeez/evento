const express = require("express");
const auth = require("../middleware/auth");
const {
  getAllCompanies,
  createCompany,
  getCompanyById,
  updateCompany,
  deleteCompany,
} = require("../controllers/CompaniesController");
const router = express.Router();
router.route("/").get(auth, getAllCompanies);
router.route("/").post(auth, createCompany);
router.route("/:id").get(auth, getCompanyById)
router.route("/:id").put(auth, updateCompany)
router.route("/:id").delete(auth, deleteCompany);

module.exports = router;
