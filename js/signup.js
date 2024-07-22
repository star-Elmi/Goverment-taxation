

// get elements keena
let yourName = document.getElementById('yourName');
let yourEmail = document.getElementById('yourEmail');
let yourUsername = document.getElementById('yourUsername');
let yourPassword = document.getElementById('yourPassword');
let formElement = document.querySelector('form');


formElement.addEventListener('submit', function (event) {
   
    event.preventDefault();
    console.log(yourName.value);
    console.log(yourEmail.value);
    console.log(yourUsername.value);
    console.log(yourPassword.value);
  
   
    // console.log(event.target);
    // console.log(event.target.username);
    // console.log(event.target.email);
    // console.log(event.target.password);
    // console.log(event.target.username.value);
    // console.log(event.target.email.value);
    // console.log(event.target.password.value);

    alert('your Information was successfully registraded');
    window.location.href = 'login.html';
    // if(usernameElement.value == username && passwordElement.value == password ) { 
    //     window.location.href = "deffault.html";
       
    // }
    // else if(usernameElement.value!= username && passwordElement.value!= password){
    //     alert('plz Enter username or password ');
    // }

    // else{
    //     alert('Invalid username or password are entered');
    // }
   

})