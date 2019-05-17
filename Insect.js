 

function init() {

    var socket = io(); // this establishes the connection. 

    socket.on('postEvent', function(data){
       document.getElementById("list2").innerHTML += "<div>" + data.myText + "</div>"; // this is adding the string to the "list 1" element in the HTML        
});
 
    showResults();
}

function send() {

    var xhr = new XMLHttpRequest();
    var data = {
        "exA": 1, 
        "winA": 2,
        "placeA": 3
    }

    xhr.open('POST', 'http://localhost:3000/', true);
    xhr.setRequestHeader("content-type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify(data));
    xhr.onload = function () {
        // Process the response here
        console.log(xhr.response)
        var ans = JSON.parse(xhr.response);
    }

}


function showResults() {
    
    var st = "hello list 1";

    document.getElementById("list1").innerHTML += "<div>" + st + "</div>"; // this is adding the string to the "list 1" element in the HTML        
    // this inserts a blank line so that you can re-run another iteration and see the line break. 
    document.getElementById("list1").innerHTML += "</br>";
   
}


function clearResults() {

    // clear all the lists by instering null character
    document.getElementById("list1").innerHTML = "";

}


