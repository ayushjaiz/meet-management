const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const connectDb = require('./config/conectdb.js')
const routes = require('./routes/router.js')
const bodyparser = require("body-parser")

const app = express()
const port = process.env.port

//Database Connection
connectDb(process.env.MONGODB_URL);

//JSON
app.use(express.json())
app.use(bodyparser.urlencoded({ extended: true }));

// Load Routes
app.use('/', routes)

app.listen(port, () => {
    console.log(`server listening at http://localhost:${port}`)
})