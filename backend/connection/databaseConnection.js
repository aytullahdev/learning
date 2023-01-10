const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://aytdev:mkXMJI2cHl29JJke@cluster0.983m0hy.mongodb.net/learner?retryWrites=true&w=majority"
    );
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (err) {
    console.log(`Error: ${err.message}`.red.underline.bold);
    process.exit(1);
  }
};
module.exports = connectDB;
