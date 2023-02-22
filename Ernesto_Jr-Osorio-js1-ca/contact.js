const message = document.querySelector("div.message");
const form = document.querySelector("#contactForm");
const name = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const address = document.querySelector("#address");
const addressError = document.querySelector("#addressError");
const characterCount =document.querySelector(".character-count span");
const button = document.querySelector("button");

address.onkeyup = function () {
  const length = event.target.value.length;
  characterCount.innerHTML = length;
}


function validateForm() {
  event.preventDefault();

  let isInputValid = true;


  if (checkLength(name.value, 3) === true) {
    nameError.style.display = "none";
    name.style.borderColor ="green";
    
  } else {
    nameError.style.display = "block";
    name.style.borderColor ="red";
    isInputValid = false;
    
  }

  if (checkLength(subject.value, 10) === true) {
    subjectError.style.display = "none";
    subject.style.borderColor ="green";

  } else {
    subjectError.style.display = "block";
    subject.style.borderColor ="red";
    lisInputValid = false;
  }

  if (validateEmail(email.value) === true) {
    emailError.style.display = "none";
    email.style.borderColor ="green";

  } else {
    emailError.style.display = "block";
    email.style.borderColor ="red";
    isInputValid = false;
  }

  if (checkLength(address.value, 25) === true) {
    addressError.style.display = "none";
    address.style.borderColor ="green";

  } else {
    addressError.style.display = "block";
    address.style.borderColor ="red";
    isInputValid = false;
  }

  if (isInputValid === true) {
    console.dir("success")
    message.innerText = "Congratulation, You Passed Validation";
  } else {
    console.log("failure")
    message.innerHTML = "Sorry, You fail to complete validation ";
  }
}

form.addEventListener("submit", validateForm)



function checkLength(value, len) {
  if (value.trim().length >= len) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches
}

