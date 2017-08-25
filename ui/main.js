//Submit username/password to login
var submit = document.getElementById('submit_btn');
submit.onclick = function () {
    
    //Create a request Object
    var request = new XMLHttpRequest();
    
    //Capture the response and store it in a variable
    request.onreadystatechange = function() {
        if (request.readyState === XMLHttpRequest.DONE) {
            
            if(request.status === 200) {
                console.login('user logged in');
                alert('logged in successfully');
            } else if(request.status === 403) {
                alert('username/password is incorrect');
            } else if(request.status === 500) {
                alert(' something gone wrong on the network');
            }
        }
        // Not done yet
    };
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    console.log(username);
    console.log(password);
    //Make a request
    request.open('POST', 'http://sangamnath.imad.hasura-app.io/login', true);
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(JSON.stringify({username: username, password: password}));
};



