const mongoose = require("mongoose");

const topicSchema = mongoose.Schema(
  {
    topic_id: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: "Topic",
    },

    title: {
      type: String,
      required: [true, "Please add a topic title"],
    },

    level: {
      type: Number,
      required: [true, "Please add a level number"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Topic", topicSchema);

// const Topic = mongoose.model("Topic", {
//   title: {
//     type: String,
//     required: true,
//   },
//   level: {
//     type: Number,
//     required: true,
//   },
// });
