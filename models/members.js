const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
    username:  { type: String, required: true },
    name:  { type: String, required: true },
    email:  { type: String, required: true },
    pic: { type: String, required: false}
    
    },
    {timestamps: true}
);

const Member = mongoose.model("Members", memberSchema);

module.exports = Member;