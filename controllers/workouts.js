const express = require('express');
const router = express.Router();
const Workout = require('../models/workouts.js');// export router

// Index
router.get('/', (req, res) => {
    Workout.find({}, (error, allWorkouts) => {
        res.render('workouts/Index', {
            workouts: allWorkouts
        })
    });

});


//New

router.get('/new', (req, res)=>{
    res.render('workouts/New')
})

//Destroy

//Update

//Create

router.post('/', (req, res)=>{
    Workout.create(req.body, (error, createdWorkout)=>{
      if(error){
        res.status(500).send({
          error: error.message
        })
      } else {
        console.log(createdWorkout)
        res.redirect('/workouts')
      }
    })
  })

//Edit

//





module.exports = router