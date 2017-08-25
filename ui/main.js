//Submit username/password to login
var submit = document.getElementById('submit_btn');
submit.onclick = function () {
    
    //Create a request Object
    var request = new XMLHttpRequest();
    
    //Capture the response and store it in a variable
    request.onreadystatechange = function() {
        if (request.readyState === XMLHttpRequest.DONE) {
            
            if(request.status === 200) {
              var names = request.responseText;
              names = JSON.parse(names);
              var list = '';
              for (var i=0; i< names.length; i++) {
                    list += '<li>' + names[i] + '</li>';
            }
            var ul = document.getElementById('namelist');
            ul.innerHTML = list;
      
               
            }
        }
        // Not done yet
    };
    var nameInput = document.getElementById('name');
    var name = nameInput.value;
    //Make a request
    request.open('POST', 'http://sangamnath.imad.hasura-app.io/submit-name?name=' + name, true);
    request.send(null);
};



