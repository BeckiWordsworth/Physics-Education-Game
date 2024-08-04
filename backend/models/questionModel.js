const mongoose = require("mongoose");

const questionSchema = mongoose.Schema(
  {
    question_id: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: "Result",
    },
    topic_id: {
      type: String,
      required: [true, "Please add a topic id"],
    },
    difficulty: {
      type: Number,
      required: [true, "Please add a difficulty score"],
    },
    text: {
      type: String,
      required: [true, "Please add a question text"],
    },
    answers: {
      type: Array,
      required: [true, "Please add a list of answers"],
    },
    correct_answer: {
      type: Number,
      required: [true, "Please add the number of the right answer"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Question", questionSchema);

// const Question = mongoose.model("Question", {
//   topic_id: {
//     type: String,
//     required: true,
//   },
//   difficulty: {
//     type: Number,
//     required: true,
//   },
//   text: {
//     type: String,
//     required: true,
//   },
//   answers: {
//     type: Array,
//     required: true,
//   },
//   correct_answer: {
//     type: Number,
//     required: true,
//   },
// });
