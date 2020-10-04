//Variables -- MOST VARIABLES SHOULD BE DECLARED HERE
let usernameInput = document.getElementById('Username').value;
let passwordInput = document.getElementById('Password').value;
let idInput = document.getElementById('ID').value;

const signUpForm = document.getElementById('signup-form');
//Sign up form Validation -- TO BE DONE BY HANNAH

console.log('I am app.js');

//Implementing Browser storage on sign up form

signUpForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    // Check browser support for local storage
    if (typeof(Storage) !== "undefined") {
        // Store data
        localStorage.setItem("username", (usernameInput));
        localStorage.setItem("password", (passwordInput));
        localStorage.setItem("id", (idInput));
        
        
        
        // Retrieve
        let usernameCheck;
        let passwordCheck;
        let idCheck;

        localStorage.getItem("username") = usernameCheck;
        localStorage.getItem("password") = passwordCheck; 
        localStorage.getItem("id") = idCheck;
        
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
 