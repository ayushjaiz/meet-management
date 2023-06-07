const Meet = require('../models/meetDB.js');

const inputForm = async (req, res) => {
    const { name, agenda, subject, date, startTime, endTime, link } = req.body

    if (name && agenda && subject && date && startTime && endTime && link) {
        try {
            const doc = new Meet({ name, agenda, subject, date, startTime, endTime, link })
            const form = await doc.save()
            res.status(201).send({ "status": "success", "message": "Input Success" })
        } catch (error) {
            console.log(error)
            res.send({ "status": "failed", "message": "Unable to Submit form" })
        }
    } else {
        res.send({ "status": "failed", "message": "All fields are required" })
    }
}

module.exports = inputForm;