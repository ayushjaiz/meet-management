require('browser-env').set('window', true);
const JitsiMeet = require('jitsi-meet-wrapper');
const transporter = require('../config/emailConfig.js');

const meet = async (req, res) => {
    const { name, email, agenda, subject, date, startTime, endTime } = req.body

    if (name && email && agenda && subject && date && startTime && endTime) {
        try {
            // 1. creating meet

            const domain = "meet.jit.si";
            //setting various options
            const options = {
                width: 700,
                height: 700,
                parentNode: document.querySelector('#meet'),
                subject: subject,
                start: '2023-06-07T17:30:00Z', //demo start time
                end: '2023-06-07T18:30:00Z', //demo end time
            }
            const api = new JitsiMeet(domain, options); //creating api object
            const meeting = await api.createMeeting(); //create the meeting
            const meetingUrl = meeting.url; // Get the meeting URL
            console.log(meetingUrl);

            // 2. sending meetingUrl to the recipient
            let info = await transporter.sendMail({
                from: process.env.EMAIL_FROM,
                to: email,
                subject: "Meeting Link",
                html: `
                <h3> SUBJECT: ${subject} </h3>
                <p> Agenda: ${agenda} </p>
                <h4> Date: ${date} </h4>
                <h4> Starting Time: ${startTime} </h4>
                <h4> Ending Time: ${endTime} </h4>
                <a href=${meetingUrl}>Click here </a> to join the meeting
                `
            });

            // 3. saving meeting details in admin database
            const doc = new formModel({ name, agenda, subject, date, startTime, endTime, meetingUrl })
            const form = await doc.save()

            res.status(201).send({ "status": "success", "message": "Meeting created" })
        } catch (error) {
            console.log(error)
            res.send({ "status": "failed", "message": "Unable to create meet" })
        }
    } else {
        res.send({ "status": "failed", "message": "All fields are required" })
    }
}

module.exports = meet

