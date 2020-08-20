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
