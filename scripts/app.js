//Variables -- MOST VARIABLES SHOULD BE DECLARED HERE

const logInButton = document.getElementById('btn-log-in');
const logInForm = document.getElementById('logIn');
// const usernamelogIn = document.getElementById('username').value;
// const passwordlogIn = document.getElementById('password').value;
const signUpForm = document.getElementById('signup-form');


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
document.addEventListener('DOMContentLoaded', function(){
const tabs = document.querySelector('.tabs');
  const panels = document.querySelectorAll('.panel');
  tabs.addEventListener('click', (e) => {
    if(e.target.tagName == 'LI'){
      const targetPanel = document.querySelector(e.target.dataset.target);
      Array.from(panels).forEach((panel) => {
        if(panel == targetPanel){
          panel.classList.add('active');
        }else{
          panel.classList.remove('active');
        }
      });
    }
  });
})


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
 
