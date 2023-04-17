const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");

const app = express();

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DBConnection Successful "))
  .catch((err) => console.log(err));

app.get("/api/test", () => {
  console.log("test is successfull");
});

app.use(express.json());
app.use("/api/users", userRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is running");
});
