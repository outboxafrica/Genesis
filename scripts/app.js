//Variables -- MOST VARIABLES SHOULD BE DECLARED HERE
const signUpForm = document.getElementById('signup-form');
const logInButton = document.getElementById('btn-log-in');
const logInForm = document.getElementById('logIn');
const usernamelogIn = document.getElementById('username').value;
const passwordlogIn = document.getElementById('password').value;

// //Signup form validation
// const form = document.getElementById('form');
// const username = document.getElementById('Username');
// const email = document.getElementById('email');
// const id = document.getElementById('id');
// const password = document.getElementById('psw');
// const password2 = document.getElementById('psw2');

// form.addEventListener('submit', e => {
// 	e.preventDefault();
	
// 	checkInputs();
// });

// function checkInputs() {
// 	// trim to remove the whitespaces
// 	const usernameValue = username.value.trim();
//     const emailValue = email.value.trim();
//     const id = id.value.trim();
// 	const passwordValue = psw.value.trim();
// 	const password2Value = psw2.value.trim();
	
// 	if(usernameValue === '') {
// 		setErrorFor(username, 'Username cannot be blank');
// 	} else {
// 		setSuccessFor(username);
// 	}
	
// 	if(emailValue === '') {
// 		setErrorFor(email, 'Email cannot be blank');
// 	} else if (!isEmail(emailValue)) {
// 		setErrorFor(email, 'Not a valid email');
// 	} else {
// 		setSuccessFor(email);
// 	}
	
// 	if(passwordValue === '') {
// 		setErrorFor(password, 'Password cannot be blank');
// 	} else {
// 		setSuccessFor(password);
// 	}
	
// 	if(password2Value === '') {
// 		setErrorFor(password2, 'Password2 cannot be blank');
// 	} else if(passwordValue !== password2Value) {
// 		setErrorFor(password2, 'Passwords does not match');
// 	} else{
// 		setSuccessFor(password2);
// 	}
// }

// function setErrorFor(input, message) {
// 	const formControl = input.parentElement;
// 	const small = formControl.querySelector('small');
// 	formControl.className = 'form-group error';
// 	small.innerText = message;
// }

// function setSuccessFor(input) {
// 	const formControl = input.parentElement;
// 	formControl.className = 'form-group success';
// }
	
// function isEmail(email) {
// 	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
// }


//Sign up form Validation -- TO BE DONE BY HANNAH











//Event listeners
logInForm.addEventListener('submit', (e)=>{
e.preventDefault();
logInEvent();
});



//Implementing Browser storage on sign up form

signUpForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    // Check browser support for local storage
    if (typeof(Storage) !== "undefined") {
        // Store data
        var usernameInput = document.getElementById('Username').value;
        var passwordInput = document.getElementById('psw').value;
        var idInput = document.getElementById('id').value;
        var emailInput = document.getElementById('email').value;

        localStorage.setItem("username", (usernameInput));
        localStorage.setItem("password", (passwordInput));
        localStorage.setItem("id", (idInput));
        localStorage.setItem("email", (emailInput));

        
        
        // Retrieve
        let usernameCheck = localStorage.getItem("username");
        let passwordCheck = localStorage.getItem("password");
        let idCheck = localStorage.getItem("id");
        let emailCheck = localStorage.getItem("email");

         
         
        console.log(usernameCheck);
        console.log(passwordCheck);
        console.log(idCheck);
        console.log(emailCheck);
       
        
        } else {
        console.log("Sorry, your browser does not support Web Storage...");
        }
});




//Functions
function logInEvent (){
    
}





function openCategory(event, category) {
    // Declare all variables
    var i, tabcontent, tablinks;
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(category).style.display = "flex";
    event.currentTarget.className += " active";
  }

  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();



  //Sign up form Validation -- TO BE DONE BY HANNAH

//Create the different functionality for the three different users


//Authenticity for the log in form
 //A loop may be needed to loop over the data in the cache and return a match 
 
