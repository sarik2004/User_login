const {
  UserRegister,
  UserLogin,
  getUser,
  forgotPassword,
  verifyOtp,
  resetPassword,
} = require("../controller/UserController");

const UserRoute = (app) => {
  app.get("/api/users", getUser);
  app.post("/api/register", UserRegister);
  app.post("/api/login", UserLogin);
  app.post("/api/send-otp", forgotPassword);
  app.post("/api/verify-otp", verifyOtp);
  app.post("/api/reset-password" , resetPassword);
};

module.exports = UserRoute;
