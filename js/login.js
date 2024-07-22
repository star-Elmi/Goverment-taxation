const username = 'SuperUser';
const password = '123';

// get elements keena
let usernameElement = document.getElementById('yourUsername');
let passwordElement = document.getElementById('yourPassword');
let form = document.querySelector('form');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    if(usernameElement.value == username && passwordElement.value == password ) { 
        window.location.href = "Home.html";
       
    }
    // else if(usernameElement.value!= username && passwordElement.value!= password){
    //     alert('plz Enter username or password ');
    // }
    else{
        alert('Invalid username or password are entered');
    }
   

})