const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const Schema = mongoose.Schema;

app.use(cors());
app.use(express.static("public"));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});



var urlencodedParser = bodyParser.urlencoded({ extended: false });

//create new user and id
app.post("/api/exercise/new-user", urlencodedParser, (req, res) => {
  let newUser = new User({ username: req.body.username });

  newUser.save((err, savedUser) => {
    if (!err) {
      let responseObject = {};

      responseObject["username"] = savedUser.username;
      responseObject["_id"] = savedUser.id;
      res.json(responseObject);
    }
  });
});

//------------------------------Find all users
app.get("/api/exercise/users", (req, res) => {
  User.find({}, (err, usersArray) => {
    if (!err) {
      res.json(usersArray);
    }
  });
});

//----------------------CREATE EXERCISE
app.post("/api/exercise/add", urlencodedParser, (req, res) => {
  //console.log(req.body);

  let newExercise = new Exercise({
    description: req.body.description,
    duration: parseInt(req.body.duration),
    date: req.body.date
  });

  //if the date is not entered use the current date
  if (newExercise.date === "") {
    newExercise.date = new Date().toISOString().substring(0, 10);
  }


  User.findByIdAndUpdate(
    req.body.userId, 
    { $push: { log: newExercise } },
    { new: true, upsert: true },
    (error, updatedDoc) => {
      if (!error) {

        let responseObject = {};
        responseObject["_id"] = updatedDoc.id;
        responseObject["username"] = updatedDoc.username;

        responseObject["description"] = newExercise.description;
        responseObject["duration"] = newExercise.duration;
        responseObject["date"] = new Date(newExercise.date).toDateString();

        res.json(responseObject);
      }
    }
  );
});

//----------------------FIND USER'S LOG(user ID is the QUERY PARAMETER)

app.get("/api/exercise/log", (req, res) => {
  User.findById(req.query.userId, (error, result) => {
    if (!error) {
      let responseObject = result;

      //if the user adds the query parameter ?from and ?to
      if (req.query.from || req.query.to) {
        let fromDate = new Date(0);
        let toDate = new Date();

        if (req.query.from) {
          fromDate = new Date(req.query.from);
        }

        if (req.query.to) {
          toDate = new Date(req.query.to);
        }

        //get the time in milliseconds for easy calculation
        fromDate = fromDate.getTime();
        toDate = toDate.getTime();

        //also get the log array and get the time in millisecond for each log
        responseObject.log = responseObject.log.filter(session => {
          let sessionDate = new Date(session.date).getTime();

          //return it the log time falls in betwwen the from and to date
          return sessionDate >= fromDate && sessionDate <= toDate;
        });
      }

      if (req.query.limit) {
        //if limit exist then use the slice method to return the limit
        responseObject.log = responseObject.log.slice(0, req.query.limit);
      }

      responseObject["count"] = result.log.length;
      res.json(responseObject);
    }
  });
});

//======================================================DATABASE===================================================================

const uri = process.env.MONGO_URI;
mongoose.connect(
  uri,
  { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true },
  err => {
    if (err) {
      console.log("an error occured " + err);
    }
  }
);

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("Mongodb database connected successfully");
});

//========================================================================================================================================

let exerciseSchema = new Schema({
  description: { type: String, required: true },
  duration: { type: Number, required: true },
  date: String
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

const userSchema = new Schema({
  username: { type: String, required: true },
  log: [exerciseSchema], 
  count:""      
});

const User = mongoose.model("User", userSchema);

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
