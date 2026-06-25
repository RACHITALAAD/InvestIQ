require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const authRoutes = require("./routes/auth");
const dashboardRoutes = require("./routes/dashboard");
const authMiddleware = require('./middleware/authMiddleware')
const holdingRoutes = require("./routes/holdings");
const ordersRoutes = require("./routes/orders");
const fundsRoutes = require("./routes/funds");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/auth" , authRoutes);
app.use("/api/dashboard" , dashboardRoutes);
app.use("/api/holdings" , holdingRoutes);
app.use("/api/orders" , ordersRoutes);
app.use("/api/funds" , fundsRoutes);

mongoose
  .connect(uri)
  .then(() => {
    console.log("Databaase Connected!");
  })
  .catch((err) => {
    console.log("Database Connection Failed");
    console.log(err);
  });

app.get("/" , (req , res)=>{
    res.send("InvestIQ Backend Running");
});

app.get("/api/dashboard" , authMiddleware , (req , res) => {
  res.json({
    message : "Welcome to InvestIQ Dashboard!",
    user: req.user,
  });
});

// application trigger or start the application
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
