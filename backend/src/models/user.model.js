const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: {
    type: String,
    enum: ["EMPLOYEE", "MANAGER", "HR"],
    default: "EMPLOYEE",
  },
});

module.exports = mongoose.model("User", UserSchema);
