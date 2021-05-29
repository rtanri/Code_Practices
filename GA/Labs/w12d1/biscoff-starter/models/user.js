const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  user_id: { type: String, required: true },
  first_name: { type: String, required: true, max: 100 },
  last_name: { type: String, required: true, max: 100 },
  email: { type: String, required: true, max: 100 },
  pwsalt: { type: String, required: true },
  hash: { type: String, required: true },
  //   addresses: { type: [], default: undefined },
  created_at: { type: Date, required: true },
  updated_at: { type: Date, reqiured: true },
});

const UserModel = mongoose.model("User", userSchema);

module.exports = {
  UserModel: UserModel,
};
