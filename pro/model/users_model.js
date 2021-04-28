var mongoose = require("mongoose");

var user_schema = mongoose.Schema(
  {
    email: {
      type: String,
    },
    user: {
      type: String,
    },
    password: {
      type: String,
    },
  },
  {
    collection: "users",
  });

var users = mongoose.model("users", user_schema);

module.exports = users;

