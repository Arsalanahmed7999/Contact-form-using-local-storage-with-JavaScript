console.log('added');

let submitBtn = document.querySelector('.submit'); 
let resetBtn = document.querySelector('.reset'); 





// reset
resetBtn.addEventListener('click', function(){
    // inputs

let firstName = document.getElementById('firstName');
let lastName = document.getElementById('lastName');
let email = document.getElementById('email');
let query = document.getElementById('textQuery');

    firstName.value=''
    lastName.value=''
    email.value=''
    query.value=''
})



// submit

submitBtn.addEventListener('click', function(){
// inputs

let firstName = document.getElementById('firstName');
let lastName = document.getElementById('lastName');
let email = document.getElementById('email');
let query = document.getElementById('textQuery');

    // firstname
firstName= firstName.value;
localStorage.setItem('First Name', firstName);
    // lastname
    lastName= lastName.value;
    localStorage.setItem('last Name', lastName);
        // email
email= email.value;
localStorage.setItem('Email Address', email);
// textQuery

query=query.value;
localStorage.setItem('Query', query);


})