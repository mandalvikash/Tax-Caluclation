const express = require("express");
const cors = require("cors");
import dotenv from 'dotenv'
const connectDB = require("./config/db");
const taxRoutes = require("./routes/taxRoutes");
dotenv.config();

const app = express();


app.use(cors({
  origin:["https://tax-caluclation-72ne-7mqyk662b-vikash-mandals-projects.vercel.app","http://localhost:5000"]}));
app.use(express.json());
app.use(express.urlencoded({extended:true}));


connectDB();


app.use("/api", taxRoutes);

const PORT =process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
