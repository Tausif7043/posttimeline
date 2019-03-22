const express = require('express');
const router = express.Router(); 
router
.post('/signin', require('../api/signin'))
.post('/signup', require('../api/signup'));

module.exports = router;