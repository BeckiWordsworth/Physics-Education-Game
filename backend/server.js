const mongoose = require("mongoose");
const cors = require("cors");
const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt-nodejs");
const uuid = require("uuid-v4");
const moment = require("moment");
const User = require("./models/userModel");
const Topic = require("./models/topicModel");
const Result = require("./models/resultModel");
const Question = require("./models/questionModel");
const { getTopic } = require("./controllers/topicController");

// Load config from .env file even using nodemon
require("dotenv").config();

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());
app.use(express.static("public"));

export const LISTEN_PORT = process.env.LISTEN_PORT || 8080;
export const MONGO_DB_URL = process.env.MONGO_DB_URI_LIVE || "mongodb://localhost/physics-game-api";

//mongoose.connect("mongodb://localhost/physics-game-api");
mongoose.connect(MONGO_DB_URL, {
  useNewUrlParser: true,
});
mongoose.Promise = Promise;

mongoose.connection.on("error", (err) => console.error("Connection error:", err));
mongoose.connection.once("open", () => console.log("Connected to mongodb"));

//Check Authentication
function checkAuth(req, res, validFunc) {
  let accessToken = req.query.accessToken || null;

  if (accessToken == null) {
    return res.status(200).json({ error: "Method requires user token" });
  }

  User.findOne({ accessToken: accessToken })
    .then((user) => {
      if (user) {
        validFunc(user);
      } else {
        res.send("No user found with that token");
      }
    })
    .catch((err) => {
      res.json(err);
    });
}

///////MODELS ///////

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

// endpoint to get info from db (if user is authenticaed)
// app.post("/users/:id/admin", (req, res) => {
// })

//Tests endpoints

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

Topic.createCollection();

//Results endpoints

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

Result.createCollection();

//Results endpoints

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

Question.createCollection();

//////ENDPOINTS//////

// POST new user to user db (not working)
app.post("/users", (req, res) => {
  if (!req.body.username || !req.body.email || !req.body.password) {
    res.status(400).json({
      created: false,
      error: "You must provide a username, email and password.",
    });
    return;
  }

  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password),
  });
  newUser
    .save()
    .then(() => {
      res.status(201).json({ created: true });
    })
    .catch((err) => {
      res.status(400).json({ created: false, error: err });
    });
});

// POST new session (i.e. log in) to user db
app.post("/sessions", (req, res) => {
  User.findOne({ username: req.body.username })
    .then((user) => {
      if (user && bcrypt.compareSync(req.body.password, user.password)) {
        res.json({
          id: user.id,
          username: user.username,
          accessToken: user.accessToken,
        });
      } else {
        res.send("Username or password not found");
      }
    })
    .catch((err) => {
      res.json(err);
    });
});

//POST results

app.post("/results", (req, res) => {
  checkAuth(req, res, (user) => {
    const result = new Result({
      user_id: user._id,
      datetime: new Date(),
      topic_id: req.body.topic_id,
      score: req.body.score,
    });

    result
      .save()
      .then(() => {
        res.status(201).send(JSON.stringify({ success: true }));
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  });
});

//GET topics

// router.route("/topics/").get(getTopic);

app.get("/topics/", (req, res) => {
  Topic.find().then((topics) => {
    console.log("topics: ", topics);
    res.json(topics);
  });
});

//GET questions

app.get("/questions/", (req, res) => {
  Question.find().then((questions) => {
    console.log("questions: ", questions);
    res.json(questions);
  });
});

//GET Results

app.get("/results/:id", (req, res) => {
  checkAuth(req, res, (user) => {
    Result.find().then((results) => {
      console.log("Results ", results);
      res.json(results);
    });
  });
});

//GET Results by time?

app.get("/resultsTime/:id", (req, res) => {
  let user = req.params.id;
  let startDate = moment().subtract(7, "days");

  Result.find({
    user_id: user,
    datetime: { $gte: startDate },
  }).then((result) => {
    res.json(result);
  });
});

//Get scores

app.get("/scores/:id", (req, res) => {
  let user_id = req.params.id;

  Result.aggregate([
    { $match: { user_id: user_id } },
    {
      $group: {
        _id: "$user_id",
        total: { $sum: "$score" },
      },
    },
  ]).then((result) => {
    res.json(result);
  });
});

app.get("/topics/:id", (req, res) => {
  let topic_id = req.params.id;
  let difficulty = req.query.difficulty;
  let sortBy = req.query.sortBy;
  let limit = req.query.limit;

  if (limit === undefined) {
    limit = 20;
  }

  if (sortBy === undefined) {
    sortBy = "difficulty";
  }

  let dbQuery = Question.find({ topic_id: topic_id })
    .sort({ [sortBy]: "asc" })
    .limit(20);
  console.log("Topic ID: " + topic_id);

  dbQuery.then((questions) => {
    console.log("questions: ", questions);
    res.send(questions);
  });
});

// POST single question to db
app.post("/question", (req, res) => {
  const question = new question(req.body);
  question
    .save()
    .then(() => {
      res.status(201).send("question added");
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

app.listen(LISTEN_PORT, () => console.log(`Physics Game API listening on port ${LISTEN_PORT}!`));
