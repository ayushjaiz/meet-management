const express = require('express')
const router = express.Router();

const formInput = require('../controllers/formInput.js')
// const createMeet = require('../controllers/createMeet.js')
const displayMeetings = require('../controllers/displayMeetings.js')

router.post('/input', formInput)
// router.post('/create-meet', createMeet)  //--Only this is getting error
router.get('/display-meet', displayMeetings)

module.exports = router;

