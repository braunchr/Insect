
//Dependencies declarations 
var express = require("express");
var socket = require('socket.io');

//App setup
var app = express();
var server = app.listen(4000, function () {
    console.log("listening on port 4000");
});

// Static file declaration

app.use(express.static('.'));  


// add the various routes stored in the routes directory

var InsectRoute = require('./routes/InsectRoute'); 
app.use('/', InsectRoute); //first argument is the filter, the second the handler




// Socket setup 
var io =  socket(server);

io.on('connection', function(socket){
    console.log('made socket connection', socket.id)
    socket.on('disconnect', function(){
        console.log('user disconnected', socket.id);
    });
});

