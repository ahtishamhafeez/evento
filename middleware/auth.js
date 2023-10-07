const jwt = require("jsonwebtoken");
const config = process.env;
const verifyToken = (req, res, next) => {
  const token = req.body.token || req.query.token || req.params.token || req.headers["x-access-token"];
  if (!token) {
    return res.status(403).json("Your token is expired or you are not authorized");
  }
  try {
    const decoded = jwt.verify(token, config.JWT_TOKEN_KEY);
    req.user = decoded;
  } catch (err) {
    return res.status(401).json("You need authorization to access the site");
  }
  return next();
};

module.exports = verifyToken;