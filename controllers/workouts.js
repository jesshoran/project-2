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

router.delete('/:id', (req, res)=>{
    Workout.findByIdAndDelete(req.params.id, (error, deletedWorkout)=> {
        if(error)
            res.status(500).send({
                error: error.message
            })
     else {
        console.log(deletedWorkout)
        res.redirect('/workouts')
    }
    })
})

//Update

router.put('/:id', (req, res) => {
    Workout.findByIdAndUpdate(req.params.id, req.body, (err, udpatedWorkout) => {
        res.redirect('/workouts');
    });
});

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
router.get('/:id/edit', (req, res)=> {
    Workout.findById(req.params.id, (error, editWorkout)=>{
        if(error){
            res.status(500).send({
                error: error.message
            })
        }else {
            res.render('workouts/Edit', {
                workout: editWorkout
            })
        }
    })
})


//Show

router.get('/:id', (req, res) => {
    Workout.findById(req.params.id, (error, foundWorkout) => {
        res.render('workouts/Show', {
            workout: foundWorkout
        });
    });
});





module.exports = router