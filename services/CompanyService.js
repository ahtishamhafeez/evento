const Company = require("../models/Company");
exports.getAllCompanies = async (request) => {
  return Company.find();
};

exports.createCompany = async (company) => {
  return await Company.create(company);
};
exports.getCompanyById = async (id) => {
  return Company.findById(id);
};

exports.updateCompany = async (id, company) => {
  return Company.findByIdAndUpdate(id, company);
};

exports.deleteCompany = async (id) => {
  return Company.findByIdAndDelete(id);
};
