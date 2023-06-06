const mongoose = require('mongoose')

//Defining schema
const formSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    agenda: { type: String, required: true, trim: true },
    subject: { type: String, required: true, trim: true },
    date: { type: Date, required: true },
    startTime: { type: String, required: true, trim: true },
    endTime: { type: String, required: true, trim: true },
    link: { type: String, required: true, trim: true },
})

//Model
const formModel = mongoose.model("form", formSchema)

module.exports = formModel