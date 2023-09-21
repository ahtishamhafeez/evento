const express = require("express");
require("dotenv").config();
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());
const port = process.env.PORT;
const companyRoutes = require("./routes/companies_routes");
const userRoutes = require("./routes/users_routes");
const dbConnection = require("./connection")
const auth = require("./middleware/auth")
app.post("/", auth, (req, res, next) => {
  res.status(200).send("Welcome 🙌 ");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.use("/api/companies", companyRoutes);
app.use("/api/users", userRoutes);
