const Meet = require('../models/meetDB.js');

const showMeetings = async (req, res) => {
    const { status } = req.query
    try {
        var meetings;
        if (status === 'all') // to display all meetings
            meetings = await Meet.find();
        else if (status === 'scheduled') // to display scheduled
            meetings = await Meet.find({ scheduled: true });
        else if (status === 'cancelled') // to display cancelled meetings
            meetings = await Meet.find({ scheduled: false });

        res.send(meetings);
    }
    catch (err) {
        console.log(err);
    }
}

module.exports = showMeetings;