//variables
const logInButton = document.getElementById('btn-log-in');
const logInForm = document.getElementById('logIn');
const usernamelogIn = document.getElementById('username').value;
const passwordlogIn = document.getElementById('password').value;


//event listeners
logInForm.addEventListener('submit', (e)=>{
e.preventDefault();
logInEvent();
});


//functions
function logInEvent (){
    
}
//Variables -- MOST VARIABLES SHOULD BE DECLARED HERE
const signUpForm = document.getElementById('signup-form');
//Sign up form Validation -- TO BE DONE BY HANNAH


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
 
