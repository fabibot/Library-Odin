
let lastInputClicked = [];

function changeInput(inputClicked){
    lastInputClicked[0] = lastInputClicked[1];
    lastInputClicked[1] = inputClicked;
}

const email1Input = document.querySelector("#email1");
email1Input.addEventListener("click", () =>{
    changeInput(email1Input);
});

const email2Input = document.querySelector("#email2");
email2Input.addEventListener("click", () =>{
    changeInput(email2Input);
});

const countryInput = document.querySelector("#country");
countryInput.addEventListener("click", () =>{
    changeInput(countryInput);
});

const postalCodeInput = document.querySelector("#postalCode");
postalCodeInput.addEventListener("click", () =>{
    changeInput(postalCodeInput);
});

const password1Input = document.querySelector("#password1");
password1Input.addEventListener("click", () =>{
    changeInput(password1Input);
});

const password2Input = document.querySelector("#password2");
password2Input.addEventListener("click", () =>{
    changeInput(password2Input);
});

document.addEventListener('click', () =>{
    checkInput();
})

const submitFormButton = document.querySelector("#submitForm");
submitFormButton.addEventListener("click", (e) =>{
    e.preventDefault();
    checkEverything();
});


function checkInput(){
    if (lastInputClicked[0]){
        input = lastInputClicked[0].value;
        idInput = lastInputClicked[0].getAttribute('id');
        divInput = document.querySelector(`#${idInput}`);
        if(idInput == "email1"){
            validateEmail(input, divInput);  
        }
        if(idInput == "email2"){
            validateEmailConfirmation(input, divInput);
        }
        if(idInput == 'postalCode'){
            //basé sur les codes postals francais
            validatePostalCode(input, divInput);
        }
        if(idInput == 'password1'){
            validatePasswordStrength(input, divInput);
        }
        if(idInput == "password2"){
            validatePasswordConfirmation(input, divInput);
        }
    }
}

function validateEmail(input, div) {
  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (input.match(validRegex)) {
    div.classList.remove('invalid');
    div.classList.add("valid");
    return true;
  } else {
    div.classList.remove('valid');
    div.classList.add("invalid");
    return false;
  }
}

function validateEmailConfirmation(input, div){
    const email1 = document.querySelector("#email1").value;
    if(input == email1){
        div.classList.remove('invalid');
        div.classList.add("valid");
    } else{
        div.classList.remove('valid');
        div.classList.add("invalid");
    }
}

function validatePostalCode(input, div){
    var validRegexPoste = /^(?:0[1-9]|[1-8]\d|9[0-8])\d{3}$/;
    if(input.match(validRegexPoste)) {
        div.classList.remove('invalid');
        div.classList.add("valid");
        return true;
      } else {
        div.classList.remove('valid');
        div.classList.add("invalid");
        return false; 
    }
}


function validatePasswordStrength(password, div) {
    let strength = 0;
    if (password.length < 8) {
      strength += 1;
    }
    if (password.match(".*[a-z].*") && password.match(".*[A-Z].*")) {
      strength += 1;
    }
    if (password.match(".*\\d.*")) {
      strength += 1;
    }
    if (password.match(".*[^a-zA-Z\\d].*")) {
      strength += 1;
    }
    if (strength < 2) {
        div.classList.remove("orange");
        div.classList.remove('valid');
        div.classList.add("invalid");
    } else if (strength == 2) {
        div.classList.remove('valid');
        div.classList.remove('invalid');
        div.classList.add("orange");
    } else if (strength > 2) {
        div.classList.remove("orange");
        div.classList.remove('invalid');
        div.classList.add("valid");
    }
  }

  function validatePasswordConfirmation(input, div){
    const password1 = document.querySelector("#password1").value;
    if(input == password1){
        div.classList.remove('invalid');
        div.classList.add("valid");
    } else{
        div.classList.remove('valid');
        div.classList.add("invalid");
    }
}

function validateCountry(){
    let selectInput = document.querySelector("#country").value;
    if(selectInput){
        return true;
    } else {
        return false;
    }
}

function checkEverything(){
    let validCount = 0;
    let allInput = document.querySelectorAll(".connextionForm");
    let classList = [];
    for(const element of allInput){
        classList.push(element.getAttribute("class"));
    }
    for(const element of classList){
        if(findWord("valid", element)){
            validCount += 1;
        }
    }
    if(validateCountry()){
        validCount +=1;
    }
    if(validCount == 6){
        displayHome();

    }
}

function findWord(word, str) {
    return str.split(' ').some(function(w){return w === word})
  }


 function displayHome(){
    const form = document.querySelector(".form");
    const home = document.querySelector(".home");
    form.style.position = "absolute";
    form.style.visibility = "hidden";
    home.style.visibility = "visible";
  }