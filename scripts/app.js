//Variables -- MOST VARIABLES SHOULD BE DECLARED HERE
const signUpForm = document.getElementById('signupform');
const logInButton = document.getElementById('btn-log-in');
const logInForm = document.getElementById('logIn');

//Functions
// //Signup form validation

function userValid(){
  var pat2=/(?=.*[ A-Za-z0-9_@./#&+-])(?=.{5,})/;
  var userpat=pat2.exec(signupform.Username.value);
  if(userpat==null){
      document.getElementById('err1').textContent = "Username should contain at least one number or symbol and uppercase letter, it can't be less than 5 characters";
  }
  else{
      document.getElementById('err1').textContent="";
      document.getElementById('err1').style.display = "none";

  }
}
function emailValid(){
  var pat5 = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  var emailpat = pat5.exec(signupform.email.value);
  if(emailpat==null){
    document.getElementById('err1').textContent="Incorrect email format";

  }
  else{
    document.getElementById('err1').textContent="";
    document.getElementById('err1').style.display = "none";

  }
}
function passValid(){
  var pat3=/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
  var passPat=pat3.exec(signupform.psw.value);
  if(passPat==null){
    document.getElementById('err2').innerHTML ="Password should contain at least one number, symbol, uppercase and lowercase letter";
    // document.getElementById('err2').style.display = "block";
  
  }
  else{
      document.getElementById('err2').innerHTML="";
      document.getElementById('err2').style.display = "none";
  }
}
function passMatch(){
  var pass1=signupform.psw.value;
  var pass2=signupform.cpsw.value;
  if(pass1!=pass2){
      document.getElementById('err3').textContent="Passwords do not match!";
  }
  else{
      document.getElementById('err3').textContent="";
      document.getElementById('err3').style.display = "none";

  }
}
function idValid(){
  var pat4 = /^[0-9]{1}$/;
  var idpat=pat4.exec(signupform.id.value);
  if(idpat==null){
      document.getElementById('err4').textContent="ID contains numbers only";
  }
  else{
      document.getElementById('err4').textContent="";
  }
}
function myID() {
  var select = document.getElementById("register").value;
 var idInput = document.getElementById("id");
if(select == 'EDU Staff'){
   idInput.setAttribute('maxlength', '1');
  }
 else if(select == 'EDU LF'){
 idInput.setAttribute('maxlength', '2');
 }
 else if(select == 'EDU student'){
 idInput.setAttribute('maxlength', '3');
 }
}



	

//Event listeners

//Functions
function logInEvent (){
  // let usernamelogIn = document.getElementById('username').value;
  // let passwordlogIn = document.getElementById('password').value;
  // if(localStorage != null){}
  usersdata = JSON.parse( localStorage.getItem('Users' ) );
  console.log(usersdata)
  //Loop through local storage and if a match is identified for each field, allow the user to log in.
  // if(usernamelogIn !== usernameInput || passwordlogIn !== passwordInput ){
  //   document.getElementById('error-msg').textContent = "The username, password or email entered are incorrect. ";
  // }

  return;
}



// saveCheckbox.addEventListener('checked', ()=>{
//   document.onload = populateForm(); // populate the form when the document is loaded
// });




let message = "Account created!";
const alertBox = document.querySelector('.alert');
const displayAlert = (message) => {
  alertBox.innerText = message; // add the message into the alert box
  alertBox.style.display = "block"; // make the alert box visible
  alertBox.style.backgroundColor = 'green'; 
  alertBox.style.color = 'white'; 
  
  setTimeout(function() {
    alertBox.style.display = "none"; // hide the alert box after 2 second
  }, 2000);
};





//Create the different functionality for the three different users


//Authenticity for the log in form
 //A loop may be needed to loop over the data in the cache and return a match 

 //Implementing Browser storage on sign up form

        let userData = [];
        // example {id:1592304983049, title: 'Deadpool', year: 2015}
        const addUser = ()=>{
             //to stop the form submitting
            let user = {
                id: document.getElementById('id').value,
                title: document.getElementById('register').value,
                uname: document.getElementById('Username').value
            }
            userData.push(user);
            // document.forms[0].reset(); // to clear the form for the next entries

            //for display purposes only
            console.warn('added' , {userData} );
            
            //saving to localStorage
            if(user.id !== "" || user.title !== "" || user.uname !== ""){
              localStorage.setItem('Users', JSON.stringify(userData) );

            }
            document.querySelector('#signupform').reset();
            
            displayAlert(message);
        }
        
  document.addEventListener('DOMContentLoaded', ()=>{
            // document.getElementById('signupbtn').addEventListener('click', (e)=>{
            //   e.preventDefault();
              
            // });
            signUpForm.addEventListener('submit', (e)=>{
              e.preventDefault();
              addUser();
              
              location.assign("../UI/books.html")
          });
          
        });
 

