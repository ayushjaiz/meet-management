const mongoose = require('mongoose')

const connectDB = async (uri) => {
    try {
        mongoose.set('strictQuery', false)
        const con = await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('database connected!');
    }
    catch (err) {
        console.log(err);
    }
}

module.exports = connectDB