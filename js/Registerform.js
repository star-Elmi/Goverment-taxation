

// get elements keena
let fullname = document.getElementById('fullname');
let Email = document.getElementById('Email');
let DOB = document.getElementById('DOB');
let Phone = document.getElementById('Phone');
let RegDate = document.getElementById('RegDate');
let Age = document.getElementById('Age');
let Gender = document.getElementById('Gender');

let formElement = document.getElementById('form');


formElement.addEventListener('submit', function (event) {
    event.preventDefault();
    if(fullname.value != '' && Email.value != ''&& DOB.value != '' && Phone.value !='' && RegDate.value !='' &&Age.value != '' && Gender.value !='' ) {
      
        
        alert('your Information was successfully registraded');
    window.location.href = 'Home.html';
    }
   
    })
   
    // event.preventDefault();
    // console.log(yourName.value);
    // console.log(yourEmail.value);
    // console.log(yourUsername.value);
    // console.log(yourPassword.value);
  
   
    // console.log(event.target);
    // console.log(event.target.username);
    // console.log(event.target.email);
    // console.log(event.target.password);
    // console.log(event.target.username.value);
    // console.log(event.target.email.value);
    // console.log(event.target.password.value);

  
    // if(usernameElement.value == username && passwordElement.value == password ) { 
    //     window.location.href = "deffault.html";
       
    // }
    // else if(usernameElement.value!= username && passwordElement.value!= password){
    //     alert('plz Enter username or password ');
    // }

    // else{
    //     alert('Invalid username or password are entered');
    // }
   
