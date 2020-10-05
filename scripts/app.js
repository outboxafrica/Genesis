//Variables -- MOST VARIABLES SHOULD BE DECLARED HERE
const signUpForm = document.getElementById('signup-form');




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
 