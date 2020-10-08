const toggleBtn = document.getElementsByClassName('toggle')[0]
const navBar = document.getElementById('links')[0]
toggleBtn.addEventListener('click', ()=>{
  navBar.classList.toggle('active')
})

//Variables -- MOST VARIABLES SHOULD BE DECLARED HERE

const logInButton = document.getElementById('btn-log-in');
const logInForm = document.getElementById('logIn');
const usernamelogIn = document.getElementById('username').value;
const passwordlogIn = document.getElementById('password').value;
const signUpForm = document.getElementById('signup-form');

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

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

// filter books
const forms = document.forms;
const searchBar = forms['search-books'].querySelector('input');
const list = document.querySelector('.col-books ul');
searchBar.addEventListener('keyup', (e) => {
  const term = e.target.value.toLowerCase();
  const books = list.getElementsByTagName('li');
  Array.from(books).forEach((book) => {
    const title = book.firstElementChild.textContent;
    if(title.toLowerCase().indexOf(term) != -1){
      book.style.display = 'block';
    } else {
      book.style.display = 'none';
    }
  });
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
 

const list = document.querySelector('.featured-books .feat-books');

  //delete book

list.addEventListener('click', (e) => {
  if(e.target.className == 'buttonn'){
    const li = e.target.parentElement;
    li.parentNode.removeChild(li);
  }
});

  // //add book 
  // const addBook = document.getElementById('book-log');
  // addBook.addEventListener('click', (e) => {
  //   e.preventDefault()
  // });

  // //Book elements

  // const bookImage = addBook.querySelector('input[type="file"]').value;
  // const li = document.createElement('li');
  // const image = document.createElement('img')
  // const deleteButton = document.createElement('span')

  // //adding content
  
  // deleteButton.textContent = 'delete';

  // //classes
  // bookImage.classList.add('image');
  // deleteButton.classList.add('borrow-item')

  // //appending image to DOM
  // li.appendChild(bookImage);
  // li.appendChild(deleteButton);
  // list.appendChild(li)




