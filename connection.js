const mongoose = require("mongoose");
const dbUrl = process.env.MONGODB_DATABASE_URL
mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
module.exports = db;