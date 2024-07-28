const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: "User",
    },
    username: {
      type: String,
      unique: true,
      required: [true, "Please add a username"],
    },

    email: {
      type: String,
      unique: true,
      required: [true, "Please add the contact email address"],
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
    },
    accessToken: {
      type: String,
      default: () => uuid(),
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);

///user model and login setup

// const User = mongoose.model("User", {
//   username: {
//     type: String,
//     unique: true,
//     required: true,
//   },
//   email: {
//     type: String,
//     unique: true,
//     required: true,
//   },
//   password: {
//     type: String,
//     required: true,
//     minlength: 8,
//   },
//   accessToken: {
//     type: String,
//     default: () => uuid(),
//   },
// });
