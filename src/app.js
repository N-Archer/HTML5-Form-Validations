/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// window.onload = function() {
//   //write your code here
//   console.log("Hello Rigo from the console!");
// };

const form = document.querySelector("#myForm");
const errorMessage = message => {
  const alertDanger = document.querySelector(".alert-danger");
  alertDanger.classList.contains("d-none") &&
    alertDanger.classList.toggle("d-block");
  alertDanger.innerHTML += `<p>${message}</p>`;
};

const submitForm = e => {
  e.preventDefault();

  const alertDanger = document.querySelector(".alert-danger");
  !alertDanger.classList.contains("d-none") &&
    alertDanger.classList.toggle("d-block");
  alertDanger.innerHTML += "";

  document
    .querySelectorAll("input")
    .forEach(elem => elem.classList.remove("is-invalid"));

  const card = document.getElementById("inputCardNum");
  const cvv = document.getElementById("cvv");
  const amount = document.getElementById("amount");
  const fn = document.getElementById("inputAddress1");
  const ln = document.getElementById("inputAddress2");
  const city = document.getElementById("inputCity");
  const state = document.getElementById("inputState");
  const postal = document.getElementById("inputZip");
  const alert = document.querySelector(".alert-danger");

  if (card.value.length != 16) {
    errorMessage("Card Number must be 16 digits.");
    card.classList.add("is-invalid");
  }
  if (cvv.value.length != 3) {
    errorMessage("CVV must contain 3 digits.");
    cvv.classList.add("is-invalid");
  }
  if (fn.value.length < 3) {
    errorMessage("First Name must be longer than 2 characters.");
    fn.classList.add("is-invalid");
  }
};

let sendForm = document.querySelector("#submitForm");
sendForm.addEventListener("click", submitForm);
