const CompanyService = require("../services/CompanyService");

exports.getAllCompanies = async (req, res) => {
  try {
    const companies = await CompanyService.getAllCompanies(req);
    res.json({ data: companies, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createCompany = async (req, res) => {
  try {
    const company = await CompanyService.createCompany(req.body);
    res.json({ data: company, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getCompanyById = async (req, res) => {
  try {
    const company = await CompanyService.getCompanyById(req.params.id);
    res.json({ data: company, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateCompany = async (req, res) => {
  try {
    const company = await CompanyService.updateCompany(req.params.id, req.body);
    res.json({ data: company, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteCompany = async (req, res) => {
  try {
    const company = await CompanyService.deleteCompany(req.params.id);
    res.json({ data: {}, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
