

//Variables -- MOST VARIABLES SHOULD BE DECLARED HERE
const signUpForm = document.getElementById('signupform');
const logInButton = document.getElementById('btn-log-in');
const logInForm = document.getElementById('logIn');

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


//Implementing Browser storage on sign up form




//Functions
// //Signup form validation

function userValid() {
  var pat2 = /(?=.*[ A-Za-z0-9_@./#&+-])(?=.{5,})/;
  var userpat = pat2.exec(signupform.Username.value);
  if (userpat == null) {
    document.getElementById('err1').textContent = "Username should contain at least one number or symbol and uppercase letter, it can't be less than 5 characters";
  }
  else {
    document.getElementById('err1').textContent = "";
    document.getElementById('err1').style.display = "none";

  }
}
function emailValid() {
  var pat5 = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  var emailpat = pat5.exec(signupform.email.value);
  if (emailpat == null) {
    document.getElementById('err1').textContent = "Incorrect email format";

  }
  else {
    document.getElementById('err1').textContent = "";
    document.getElementById('err1').style.display = "none";

  }
}

const tabs = document.querySelector('.tabs');
const panels = document.querySelectorAll('.panel');
tabs.addEventListener('click', (e) => {
  if (e.target.tagName == 'LI') {
    const targetPanel = document.querySelector(e.target.dataset.target);
    Array.from(panels).forEach((panel) => {
      if (panel == targetPanel) {
        panel.classList.add('active');
      } else {
        panel.classList.remove('active');
      }
    });
  }
});

// filter books
const forms = document.forms;
const searchBar = forms['search-books'].querySelector('input');
const bookList = document.querySelector('.col-books ul');
searchBar.addEventListener('keyup', (e) => {
  const term = e.target.value.toLowerCase();
  const books = bookList.getElementsByTagName('li');
  Array.from(books).forEach((book) => {
    const title = book.firstElementChild.textContent;
    if (title.toLowerCase().indexOf(term) != -1) {
      book.style.display = 'block';
    } else {
      book.style.display = 'none';
    }
  });

});   


function passValid() {
    var pat3 = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
    var passPat = pat3.exec(signupform.psw.value);
    if (passPat == null) {
      document.getElementById('err2').innerHTML = "Password should contain at least one number, symbol, uppercase and lowercase letter";
      // document.getElementById('err2').style.display = "block";

    }
    else {
      document.getElementById('err2').innerHTML = "";
      document.getElementById('err2').style.display = "none";
    }
  }
function passMatch() {
    var pass1 = signupform.psw.value;
    var pass2 = signupform.cpsw.value;
    if (pass1 != pass2) {
      document.getElementById('err3').textContent = "Passwords do not match!";
    }
    else {
      document.getElementById('err3').textContent = "";
      document.getElementById('err3').style.display = "none";

    }
  }
function idValid() {
    var pat4 = /^[0-9]{1,4}$/;
    var idpat = pat4.exec(signupform.id.value);
    if (idpat == null) {
      document.getElementById('err4').textContent = "ID contains numbers only";
    }
    else {
      document.getElementById('err4').textContent = "";
    }
  }

function myID() {
    var select = document.getElementById("register").value;
    var idInput = document.getElementById("id");
    if (select == 'EDU Staff') {
      idInput.setAttribute('maxlength', '1');
    }
    else if (select == 'EDU LF') {
      idInput.setAttribute('maxlength', '2');
    }
    else if (select == 'EDU student') {
      idInput.setAttribute('maxlength', '3');
    }
  }



	


let usersdata = JSON.parse(localStorage.getItem('Users'));
console.log(usersdata);

//Add, delete and borrow features
for (let i in usersdata) {
  if (usersdata[i].id <= 20) {
    //add and delete buttons should be enabled

  }
  else if (usersdata[i].id < 1000 && usersdata[i].title !== "Other") {
    //Borrow and search features should be enabled


    // filter books
    
  }
}

const forms = document.forms;
    const searchBar = forms['search-books'].querySelector('input');
    const list = document.querySelector('.all-books ul');
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

  // Add book to form
  const addForm = forms['book-form'];
  addForm.addEventListener('submit', function(e){
    e.preventDefault();

    // create elements
    const value = addForm.querySelector('input[type="text"]').value;
    const li = document.createElement('li');
    const bookImage = document.createElement('img')
    bookImage.src= '../images/feature-books/psychology2.jpg';
    // bookImage.width = '120px';
    // bookImage.height = '160px';
    const bookName = document.createElement('span');
    const borrowBtn = document.createElement('span');
    const deleteBtn = document.createElement('span');
    

      // add text content
    bookName.textContent = value;
    borrowBtn.textContent = 'Borrow';
    deleteBtn.textContent = 'Delete';
    

      // add classes
    bookImage.classList.add('image');
    bookName.classList.add('title');
    borrowBtn.classList.add('borrow');
    deleteBtn.classList.add('delete-bk');

      // append to DOM
    li.appendChild(bookImage)
    li.appendChild(bookName);
    li.appendChild(borrowBtn);
    li.appendChild(deleteBtn);
    
    list.appendChild(li);
  });

  list.addEventListener('click', (e) => {
    if(e.target.className == 'delete-bk'){
      const li = e.target.parentElement;
      li.parentNode.removeChild(li);
    }
    // else if(e.target.className == 'borrow'){
    //   const bookBorrowed = document.createElement('LI')
    //   const
     
    // }
  });


function validatelogIn() {

  let usernamelogIn = document.getElementById('username').value;
  let emailLogIn = document.getElementById('Email').value;

  for (let p in usersdata) {
    console.log(p + ':' + usersdata[p].uname + '|' + usersdata[p].email);

    //Loop through local storage and if a match is identified for each field, allow the user to log in.

    if (usernamelogIn == usersdata[p].username && emailLogIn == usersdata[p].email) {
      displayAlert("Logged in successfully");
    }
    else {
      displayAlert("Username or Email are incorrect");
    }
  }



}



// saveCheckbox.addEventListener('checked', ()=>{
//   document.onload = populateForm(); // populate the form when the document is loaded
// });




let message;
const alertBox = document.querySelector('.alert');
const displayAlert = (message) => {
  alertBox.textContent = message; // add the message into the alert box
  alertBox.style.display = "block"; // make the alert box visible
  alertBox.style.backgroundColor = 'green';
  alertBox.style.color = 'white';

  setTimeout(function () {
    alertBox.style.display = "none"; // hide the alert box after 2 second
  }, 2000);
};





//Create the different functionality for the three different users


// const list = document.querySelector('.all-books ul');
// const forms = document.forms;

// delete books
// list.addEventListener('click', (e) => {
//   if (e.target.className == 'delete-bk') {
//     const li = e.target.parentElement;
//     li.parentNode.removeChild(li);
//   }
//   if (e.target.className == 'borrow') {
//     const borrowBtn = document.querySelector('.borrow')
//     borrowBtn.disabled = true;
//   }
// });



//Authenticity for the log in form
//A loop may be needed to loop over the data in the cache and return a match 

//Implementing Browser storage on sign up form

let userData = [];
// example {id:1592304983049, title: 'Deadpool', year: 2015}
const addUser = () => {
  //to stop the form submitting
  let user = {
    id: document.getElementById('id').value,
    title: document.getElementById('register').value,
    uname: document.getElementById('Username').value,
    email: document.getElementById('email').value
  }
  userData.push(user);
  // document.forms[0].reset(); // to clear the form for the next entries

  //for display purposes only
  console.warn('added', { userData });

  //saving to localStorage
  if (user.id !== "" || user.title !== "" || user.uname !== "" || user.email !== "") {
    localStorage.setItem('Users', JSON.stringify(userData));

  }
  displayAlert("Account created!");
  document.querySelector('#signupform').reset();

}
//Event listeners
signUpForm.addEventListener('submit', (e) => {
  e.preventDefault();
  addUser();

  location.assign("../UI/books.html")
});

logInForm.addEventListener('submit', (e) => {
  e.preventDefault();
  validatelogIn();
});



 //A loop may be needed to loop over the data in the cache and return a match 
 
//FOR SUPPORT PAGE
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("myslide");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
