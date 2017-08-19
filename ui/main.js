//counter code
var button = document.getElementById("counter");

button.onclick = function() {
    
    var request = new XMLHttpRequest();
    
    //Capture the response and store it in a variable
    request.onreadystatechange = function() {
        if (request.readyState == XMLHttpRequest.DONE) {
            
            if(request.status === 200) {
                
                var counter = request.responseText;
                var span = document.getElementById("count");
                span.innerHTML = counter.toString();
            }
        }
    };
    request.open('GET', 'http://sangamnath.imad.hasura-app.io/counter', true);
    request.send(null);
};

//Submit name
var nameInput = document.getElementById("name");
var name = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick = function () {
    
    //Create a request Object
    var request = new XMLHttpRequest();
    
    //Capture the response and store it in a variable
    request.onreadystatechange = function() {
        if (request.readyState == XMLHttpRequest.DONE) {
            
            if(request.status === 200) {
              var names = ['name1', 'name2', 'name3', 'name4'];
              var list = '';
                for (var i=0; i< names.length; i++) {
                    list += '<li>' + names[i] + '</li>';
            }
            var ul = document.getElementById('nameslist');
            ul.innerHTML = list;
      
               
            }
        }
        // Not done yet
    };
    
    //Make a request
    request.open('GET', 'http://sangamnath.imad.hasura-app.io/submit-name?name='+ name, true);
    request.send(null);
};



