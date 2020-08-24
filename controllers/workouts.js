const express = require("express");
const router = express.Router();
const Workout = require("../models/workouts.js"); // export router

// Index
router.get("/", (req, res) => {
  Workout.find({}, (error, allWorkouts) => {
    res.render("workouts/Index", {
      workouts: allWorkouts,
    });
  });
});

//MUSIC PATHS
//EDM
router.get("/edm", (req, res) => {
  Workout.find({ music: "EDM" }, (error, edm) => {
    if (error) {
      res.status(500).send({
        error: error.message,
      });
    } else {
      console.log(edm);
      res.render("workouts/Music", {
        workout: edm,
      });
    }
  });
});

router.get("/hiphop", (req, res) => {
  Workout.find({ music: "Hip-Hop" }, (error, hip) => {
    if (error) {
      res.status(500).send({
        error: error.message,
      });
    } else {
      console.log(hip);
      res.render("workouts/Music", {
        workout: hip,
      });
    }
  });
});

router.get("/metal", (req, res) => {
  Workout.find({ music: "Metal" }, (error, metal) => {
    if (error) {
      res.status(500).send({
        error: error.message,
      });
    } else {
      console.log(metal);
      res.render("workouts/Music", {
        workout: metal,
      });
    }
  });
});

router.get("/top40", (req, res) => {
  Workout.find({ music: "Top-40" }, (error, top40) => {
    if (error) {
      res.status(500).send({
        error: error.message,
      });
    } else {
      console.log(top40);
      res.render("workouts/Music", {
        workout: top40,
      });
    }
  });
});

//New

router.get("/new", (req, res) => {
  res.render("workouts/New");
});

//Destroy

router.delete("/:id", (req, res) => {
  Workout.findByIdAndDelete(req.params.id, (error, deletedWorkout) => {
    if (error)
      res.status(500).send({
        error: error.message,
      });
    else {
      console.log(deletedWorkout);
      res.redirect("/workouts");
    }
  });
});

// Update - add comment to workout:
router.put("/:id/comment", (req, res) => {
  const comment = { username: req.body.username, comment: req.body.comment };
  console.log(comment);
  Workout.findById(req.params.id, (error, foundWorkout) => {
    console.log(foundWorkout);
    foundWorkout.comments.push(comment);
    console.log(foundWorkout);
    foundWorkout.save((err, savedWorkout) => {
      if (err) {
        console.log(err);
      } else {
        console.log(savedWorkout);
      }
      res.redirect(`/workouts/${req.params.id}`);
    });
  });
});

//Update

router.put("/:id", (req, res) => {
  Workout.findByIdAndUpdate(req.params.id, req.body, (err, udpatedWorkout) => {
    res.redirect("/workouts");
  });
});

//Create

router.post("/", (req, res) => {
  Workout.create(req.body, (error, createdWorkout) => {
    if (error) {
      res.status(500).send({
        error: error.message,
      });
    } else {
      console.log(createdWorkout);
      res.redirect("/workouts");
    }
  });
});

//   router.post('/', (req, res)=>{
//     Workout.create(req.body, (error, createdWorkout)=>{
//       if(error){
//         res.status(500).send({
//           error: error.message
//         })
//       } else {
//         console.log(createdWorkout)
//         res.redirect('/workouts')
//       }
//     })
//   })

//Edit
router.get("/:id/edit", (req, res) => {
  Workout.findById(req.params.id, (error, editWorkout) => {
    if (error) {
      res.status(500).send({
        error: error.message,
      });
    } else {
      res.render("workouts/Edit", {
        workout: editWorkout,
      });
    }
  });
});

router.get("/:id/comment", (req, res) => {
  Workout.findById(req.params.id, (error, editComments) => {
    if (error) {
      res.status(500).send({
        error: error.message,
      });
    } else {
      res.render("workouts/Comments", {
        workout: editComments,
      });
    }
  });
});

//Show

router.get("/:id", (req, res) => {
  Workout.findById(req.params.id, (error, foundWorkout, allComments) => {
    res.render("workouts/Show", {
      workout: foundWorkout,
    });
  });
});

module.exports = router;
