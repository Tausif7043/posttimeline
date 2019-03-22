const express = require('express')
const app = express()
const router = express.Router()
const port = 3000
var bodyParser = require('body-parser'); 
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
require('./routes')(app)
router.get('/', (req, res) => res.send('Hello World!'))  
var server = require("http").createServer(app);
server.listen(port, function () {
    console.log("Express server listening on " + port);
});