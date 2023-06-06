const express = require('express')
const router = express.Router();

const formInput = require('../controllers/formInput.js')

router.post('/input', formInput)

module.exports = router;

