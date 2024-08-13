const asyncHandler = require("express-async-handler");
const Topic = require("../models/topicModel");

//@desc Get all contacts
//@desc GET /api/contacts
//@desc @access private

const getTopics = asyncHandler(async (req, res) => {
  const topics = await Topic.find();
  res.status(200).json(topics);
});

//
