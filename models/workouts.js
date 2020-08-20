const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
    name:  { type: String, required: false },
    type:  { type: String, required: true },
    music: { type: String, required: true },
    image: { type: String, required: false },
    when: { type: String, required: true },
    description: { type: String, required: true },
    
    },
    // {timestamps: true}
);

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
