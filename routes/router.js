const express = require('express')
const router = express.Router();

const createMeet = require('../controllers/createMeet.js')
const displayMeetings = require('../controllers/displayMeetings.js')

router.post('/create-meet', async (req, res) => {
    res.render('../views/meet.html')
})
router.get('/display-meet', displayMeetings)

module.exports = router;

