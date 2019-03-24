const express = require('express');
const router = express.Router(); 
const expressJwt = require('express-jwt');
const isLoggedIn = require('../components/isLoggedin')
router
.get('/get', expressJwt({secret: 'POSTAPP'}), require('../api/getPost'))
.post('/post', expressJwt({secret: 'POSTAPP'}), require('../api/postPost'));

module.exports = router;