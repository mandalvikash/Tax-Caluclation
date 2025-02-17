const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const taxRoutes = require("./routes/taxRoutes");
require('dotenv').config();

const app = express();


app.use(cors());
app.use(express.json());


connectDB();


app.use("/api", taxRoutes);

const PORT =process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});