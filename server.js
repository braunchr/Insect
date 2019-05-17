
//Dependencies declarations 
var express = require("express");
var socket = require('socket.io');

//App setup
var app = express();
var server = app.listen(3000, function () {
    console.log("listening on port 3000");
});



// Socket setup 
var io =  socket(server);

io.on('connection', function(socket){
    console.log('made socket connection', socket.id)
    socket.on('disconnect', function(){
        console.log('user disconnected', socket.id);
    });
});

 

// Static file declaration
app.use(express.static('.'));  


// add the various routes stored in the routes directory 

var InsectRoute = require('./routes/InsectRoute'); 
app.use(function(req,res,next){  // this makes the variable io available to the routing module by passing it in the req object
    req.io = io;
    next();
});
app.use('/', InsectRoute); //first argument is the filter, the second the handler

