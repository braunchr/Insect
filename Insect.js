 

function init() {

    var socket = io(); // this establishes the connection. 
    var element;
    var clonedElement; 
    socket.on('postEvent', function(data){

        document.getElementById("list1").innerHTML = "<div>" + data.text + "</div>" + document.getElementById("list1").innerHTML ; 
        document.getElementById("mothNumber").value = data.mothNumber;    
        document.getElementById("flyNumber").value = data.flyNumber; 
        document.getElementById("gnatNumber").value = data.gnatNumber; 

        element = document.getElementById("A1");
        element.style.animationName = data.A1;
        clonedElement = element.cloneNode(true);
        element.parentNode.replaceChild(clonedElement, element);
        
        element = document.getElementById("A2");
        element.style.animationName = data.A2;
        clonedElement = element.cloneNode(true);
        element.parentNode.replaceChild(clonedElement, element);
        
        element = document.getElementById("A3");
        element.style.animationName = data.A3;
        clonedElement = element.cloneNode(true);
        element.parentNode.replaceChild(clonedElement, element);
        
        element = document.getElementById("B1");
        element.style.animationName = data.B1;
        clonedElement = element.cloneNode(true);
        element.parentNode.replaceChild(clonedElement, element);

        element = document.getElementById("B2");
        element.style.animationName = data.B2;
        clonedElement = element.cloneNode(true);
        element.parentNode.replaceChild(clonedElement, element);

        element = document.getElementById("B3");
        element.style.animationName = data.B3;
        clonedElement = element.cloneNode(true);
        element.parentNode.replaceChild(clonedElement, element);

        element = document.getElementById("C1");
        element.style.animationName = data.C1;
        clonedElement = element.cloneNode(true);
        element.parentNode.replaceChild(clonedElement, element);

        element = document.getElementById("C2");
        element.style.animationName = data.C2;
        clonedElement = element.cloneNode(true);
        element.parentNode.replaceChild(clonedElement, element);

        element = document.getElementById("C3");
        element.style.animationName = data.C3;
        clonedElement = element.cloneNode(true);
        element.parentNode.replaceChild(clonedElement, element);
    });
  
}

function send() {

    var xhr = new XMLHttpRequest();
    var data = {
        "A1": "grey1", 
        "A2": "grey2",
        "A3": "grey3",
        "B1": "grey2", 
        "B2": "grey3",
        "B3": "grey1",
        "C1": "grey3", 
        "C2": "grey1",
        "C3": "grey2",
        "text": "this is custom text",
        "mothNumber": 111,
        "flyNumber": 222,
        "gnatNumber": 333
    };

    xhr.open('POST', 'http://localhost:3000/', true);
    xhr.setRequestHeader("content-type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify(data));
    xhr.onload = function () {
        // Process the response here
        console.log(xhr.response)
        var ans = JSON.parse(xhr.response);
    }
}


function clearResults() {
    // clear all the lists by instering null character
    document.getElementById("list1").innerHTML = "";
    document.getElementById("mothNumber").value = "";    
    document.getElementById("flyNumber").value = ""; 
    document.getElementById("gnatNumber").value = ""; 

}


