const express = require('express');
const router = express.Router();

// this handles all the routing of this specific route 
// so no more filtering is required
var bodyParser = require("body-parser");
router.use(bodyParser.json({ extended: true })); // for parsing application/json
router.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


router.post('/', function (req, res) {
console.log('received a POST request');
req.io.sockets.emit('postEvent', req.body);
res.status(404).json({ message: 'response from POST'})
});  




router.get('/', function(req, res) {

    res.send('hello');
});


module.exports = router; //required to send back to the main application