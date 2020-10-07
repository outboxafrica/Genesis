//Variables -- MOST VARIABLES SHOULD BE DECLARED HERE
// const signUpForm = document.getElementById('signup-form');

//Signup form validation
const form = document.getElementById('form');
const username = document.getElementById('Username');
const email = document.getElementById('email');
const id = document.getElementById('id');
const password = document.getElementById('psw');
const password2 = document.getElementById('psw2');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const id = id.value.trim();
	const passwordValue = psw.value.trim();
	const password2Value = psw2.value.trim();
	
	if(usernameValue === '') {
		setErrorFor(username, 'Username cannot be blank');
	} else {
		setSuccessFor(username);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
	} else {
		setSuccessFor(password);
	}
	
	if(password2Value === '') {
		setErrorFor(password2, 'Password2 cannot be blank');
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Passwords does not match');
	} else{
		setSuccessFor(password2);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-group error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-group success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}







//Sign up form Validation -- TO BE DONE BY HANNAH
//     // get the modal
// let modal = document.getElementById("modal-form")

// // get the button that opens the modal
// let btn = document.getElementById("modal-button")

// // get the span element that closes the modal
// let span = document.querySelector(".close")

// // when the user clicks on the button, open the modal
// btn.onclick = function() {
//   modal.style.display = "block"
// }

// // when the user clicks on the close button, close the modal
// span.onclick = function() {
//   modal.style.display = "none"
// }

// function validateForm() {
// 	var x = document.forms["myForm"]["fname"].value;
// 	if (x == "") {
// 	  alert("Name must be filled out");
// 	  return false;
// 	}
//   }
//   var usernameInput = document.getElementById("Username").value;
//   var passwordInput = document.getElementById("Password").value;

//   // Check browser support for local storage
//   if (typeof Storage !== "undefined") {
// 	// Store data
// 	localStorage.setItem("username", String(usernameInput));
// 	localStorage.setItem("password", String(passwordInput));

// 	// Retrieve
// 	console.log(localStorage.getItem("username"));
// 	console.log(localStorage.getItem("password"));
//   } else {
// 	console.log("Sorry, your browser does not support Web Storage...");
//   }





//Implementing Browser storage on sign up form

signUpForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    // Check browser support for local storage
    if (typeof(Storage) !== "undefined") {
        // Store data
        var usernameInput = document.getElementById('Username').value;
        var passwordInput = document.getElementById('psw').value;
        var idInput = document.getElementById('id').value;

        localStorage.setItem("username", (usernameInput));
        localStorage.setItem("password", (passwordInput));
        localStorage.setItem("id", (idInput));
        
        
        
        // Retrieve
        let usernameCheck = localStorage.getItem("username");
        let passwordCheck = localStorage.getItem("password");
        let idCheck = localStorage.getItem("id");

         
         
        console.log(usernameCheck);
        console.log(passwordCheck);
        console.log(idCheck);
        
        
        } else {
        console.log("Sorry, your browser does not support Web Storage...");
        }
});




//Create the different functionality for the three different users


//Authenticity for the log in form
 //A loop may be needed to loop over the data in the cache and return a match 
 