const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: { type: String, require },
    email: { type: String, require },
    password: { type: String, require },
    isAdmin: { type: Boolean, require, default: false },
    address: {type: String, require},
    contact: {type: Number, require}
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("users", userSchema);
