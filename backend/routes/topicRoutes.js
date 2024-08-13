const express = require("express");
const router = express.Router();
const validateToken = require("../middleware/validateTokenHadler");

const { getTopic } = require("../controllers/topicControllers");

//Make all routes private
router.use(validateToken);
router.route("/topics/").get(getTopic);

module.exports = router;
