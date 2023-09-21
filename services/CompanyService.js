const Company = require("../models/Company");
exports.getAllCompanies = async (request) => {
  return await Company.find();
};

exports.createCompany = async (company) => {
  return await Company.create(company);
};
exports.getCompanyById = async (id) => {
  return await Company.findById(id);
};

exports.updateCompany = async (id, company) => {
  return await Company.findByIdAndUpdate(id, company);
};

exports.deleteCompany = async (id) => {
  return await Company.findByIdAndDelete(id);
};
