const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../modal/userModal");

const protect = asyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // Get the token
      token = req.headers.authorization.split(" ")[1];

      // Decode the token and get the object
      const decode = jwt.verify(token, "mkXMJI2cHl29JJke");

      // Check if the user with token id is valid or not
      req.user = await User.findById(decode.id).select("-password");
      next();
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error("Not Authorized");
    }
  }
  if (!token) {
    console.log(error);
    res.status(401);
    throw new Error("Not Authorized");
  }
});

module.exports = protect;
