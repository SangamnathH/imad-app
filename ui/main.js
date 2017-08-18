//counter code
var button = document.getElementById("counter");
var counter =0;

button.onclick = function() {
    
    counter = counter+0;
    var span = document.getElementById("count");
    span.innerHTML = counter.toString();
    
};


