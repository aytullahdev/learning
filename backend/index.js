const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const cors = require("cors");
const color = require("colors");
const PORT = process.env.PORT || 9002;
const errorHandler = require("./middleware/errorHandle");
const connectDB = require("./connection/databaseConnection");
// Extensions

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.get("/", (req, res) => {
  res.send("Welcome to learner");
});
app.use("/api/users", require("./routes/userRoutes"));
// Error Handle

app.use(errorHandler);

app.listen(PORT, async () => {
  await connectDB();
  console.log("Server is running on port " + PORT);
});
