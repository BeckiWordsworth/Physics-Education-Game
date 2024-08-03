const mongoose = require("mongoose");

const resultSchema = mongoose.Schema(
  {
    result_id: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: "Result",
    },
    user_id: {
      type: String,
      required: [true, "Please add a user id"],
    },
    topic_id: {
      type: String,
      required: [true, "Please add a topic id"],
    },
    score: {
      type: Number,
      required: [true, "Please add a score"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Result", resultSchema);

// const Result = mongoose.model("Result", {
//   user_id: {
//     type: String,
//     required: true,
//   },
//   datetime: {
//     type: Date,
//     required: true,
//   },
//   topic_id: {
//     type: String,
//     required: true,
//   },
//   score: {
//     type: Number,
//     required: true,
//   },
// });
