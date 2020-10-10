//Variables -- MOST VARIABLES SHOULD BE DECLARED HERE

const logInButton = document.getElementById('btn-log-in');
const logInForm = document.getElementById('logIn');

const signUpForm = document.getElementById('signup-form');


//EVENT LISTENERS



//Implementing Browser storage on sign up form

signUpForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    // Check browser support for local storage
    if (typeof(Storage) !== "undefined") {
        // Store data
        let usernameInput = document.getElementById('Username').value;
        let passwordInput = document.getElementById('psw').value;
        let idInput = document.getElementById('id').value;
        let emailInput = document.getElementById('email').value;

        
          let user = {
            'name': usernameInput,
            'email': emailInput,
            'ID': idInput,
            'password': passwordInput
          };

          localStorage.setItem('user', JSON.stringify(user));

        // localStorage.setItem("username", (usernameInput));
        // localStorage.setItem("password", (passwordInput));
        // localStorage.setItem("id", (idInput));
        // localStorage.setItem("email", (emailInput));
        // JSON.stringify(usernameInput, passwordInput, idInput, emailInput )
        
        
        // Retrieve
        let userCheck = JSON.parse(localStorage.getItem('user'));
        // let usernameCheck = localStorage.getItem("username");
        // let passwordCheck = localStorage.getItem("password");
        // let idCheck = localStorage.getItem("id");
        // let emailCheck = localStorage.getItem("email");

         
         
        console.log(userCheck);
        // console.log(passwordCheck);
        // console.log(idCheck);
        // console.log(emailCheck);
       
        
        } else {
        console.log("Sorry, your browser does not support Web Storage...");
        }
});


logInForm.addEventListener('submit', (e)=>{
  e.preventDefault();
  logInEvent();
  

  document.getElementById('welcome-text').textContent = "Welcome " + usernamelogIn + " !";

  
});


//Functions
function logInEvent (){
  let usernamelogIn = document.getElementById('username').value;
  let passwordlogIn = document.getElementById('password').value;
  
  localStorage.getItem(JSON.parse(userData));

  //Loop through local storage and if a match is identified for each field, allow the user to log in.
  if(usernamelogIn !== usernameInput || passwordlogIn !== passwordInput ){
    document.getElementById('error-msg').textContent = "The username, password or email entered are incorrect. ";
  }

  return;
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
 