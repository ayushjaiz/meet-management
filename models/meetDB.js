const mongoose = require('mongoose')

//Defining schema
const meetSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    agenda: { type: String, required: true, trim: true },
    subject: { type: String, required: true, trim: true },
    date: { type: Date, required: true },
    startTime: { type: String, required: true, trim: true },
    endTime: { type: String, required: true, trim: true },
    link: { type: String, required: true, trim: true },
    scheduled: { type: Boolean, default: true },
    // scheduled = meet not cancelled yet,false= meet cancelled
})

//Model
const meetModel = mongoose.model("meet", meetSchema)

module.exports = meetModel