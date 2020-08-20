require('dotenv').config();

// dependencies
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');

const PORT = process.env.PORT || 3000;

// middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(methodOverride('_method'));
const mongoURI = process.env.MONGO_URI;

// mongoose connection
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true})
mongoose.connection.once("open", ()=>{
    console.log("connected and feelin gooooood");
})

//Database
const Workout = require("./models/workouts.js")

// Controller

const workoutsController = require('./controllers/workouts.js');
app.use('/workouts', workoutsController);


// Homepage

app.get('/', (req, res)=> {
    res.send("Welcome to the Homepage")    
}) 

// listen
app.listen(PORT, () => {
    console.log('workin workin on port: ' + PORT);
});

