const express = require('express');
const router = express.Router();
const Member = require('../models/members.js');// export router


// Index
router.get('/', (req, res) => {
    Member.find({}, (error, allMembers) => {
        res.render('members/Index', {
            members: allMembers
        })
    });
});

        
//New

router.get('/new', (req, res)=>{
    res.render('members/New')
})


//Destroy

router.delete('/:id', (req, res)=>{
    Workout.findByIdAndDelete(req.params.id, (error, deletedMember)=> {
        if(error) 
            res.status(500).send({
                error: error.message
            })
     else {
        console.log(deletedMember)
        res.redirect('/members')
    }
    })
})

// //Update

// router.put('/:id', (req, res) => {
//     Workout.findByIdAndUpdate(req.params.id, req.body, (err, udpatedWorkout) => {
//         res.redirect('/workouts');
//     });
// });



// router.put('/:id/comment', (req, res) => {
//     const comment = {username: req.body.username, comment: req.body.comment}
//     console.log(comment)
//     Workout.findById(req.params.id, (error, foundWorkout)=>{
//             console.log(foundWorkout)
//         foundWorkout.comments.push(comment)
//             console.log(foundWorkout)
//         Workout.findByIdAndUpdate(foundWorkout, {comments: foundWorkout.comments})
//         res.redirect(`/workouts/${req.params.id}`)
        
   
//     });
// });

//Create

router.post('/', (req, res)=>{
    Member.create(req.body, (error, newMember)=>{
      if(error){
        res.status(500).send({
          error: error.message
        })
      } else {
        console.log(newMember)
        res.redirect('/members')
      }
    })
  })

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

// //Edit
// router.get('/:id/edit', (req, res)=> {
//     Workout.findById(req.params.id, (error, editWorkout)=>{
//         if(error){
//             res.status(500).send({
//                 error: error.message
//             })
//         }else {
//             res.render('workouts/Edit', {
//                 workout: editWorkout
//             })
//         }
//     })
// })



// //Show

// router.get('/:id', (req, res) => {
//     Workout.findById(req.params.id, (error, foundWorkout, allComments) => {
//         res.render('workouts/Show', {
//             workout: foundWorkout,
//         });
//     });
// });




module.exports = router