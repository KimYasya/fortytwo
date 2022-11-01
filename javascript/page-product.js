"use strict"

const form = document.querySelector(".review-form");

const formName = document.querySelector(".review-form__name");
const formNameError = document.getElementById("review-form-name-error");

const formRaiting = document.querySelector(".review-form__raiting");
const formRaitingError = document.getElementById("review-form-raiting-error");

const formText = document.querySelector(".review-form__text");

const formBtn = document.querySelector("review-form__btn");


let nameErrorStr = "";
let raitingErrorStr = "";


formName.value = localStorage.getItem("formName");
formName.oninput = () => {
      localStorage.setItem("formName", formName.value)
};

formRaiting.value = localStorage.getItem("formRaiting");
formRaiting.oninput = () => {
      localStorage.setItem("formRaiting", formRaiting.value)
};

formText.value = localStorage.getItem("formText");
formText.oninput = () => {
      localStorage.setItem("formText", formText.value)
};

form.addEventListener("submit", (event) => {
    event.preventDefault();
  
    if (!formName.value) { 
      nameErrorStr = "Поле не заполнено";
    } else if (formName.value.length <= 2 ) { 
      nameErrorStr = "Имя не может быть короче 2-х символов";
    } else {
      nameErrorStr = "";
      console.log("Имя и Фамилия: ", formName.value);
    }
  
    if (!formRaiting.value) { 
      raitingErrorStr = "Оценка должна быть от 1 до 5";
    } else if (!formRaiting.value.match(/^\d+$/)) {
      raitingErrorStr = "Вы ввели не то число. Оценка должна быть от 1 до 5";
    } else if (!formRaiting.value.match(/^[1-5]$/)) {
      raitingErrorStr = "Оценка должна быть от 1 до 5";
    } else {
      raitingErrorStr = "";
      console.log("Оценка: ", formRaiting.value);
    }
  
    if (nameErrorStr) {
      formNameError.innerHTML = nameErrorStr;
      formName.style.border = "1px solid #f36223";
      formNameError.classList.add("review-form__error-active");
    } else {
      formNameError.innerHTML = "";
      formName.style.border = "";
      formNameError.classList.remove("review-form__error-active");
      localStorage.removeItem("formName"); formName.value = "";
    }
  
    if (raitingErrorStr) {
      formRaitingError.innerHTML = raitingErrorStr;
      formRaiting.style.border = "1px solid #f36223";
      formRaitingError.classList.add("review-form__error-active");
    } else {      
      formRaitingError.innerHTML = ""
      formRaiting.style.border = "";
      formRaitingError.classList.remove("review-form__error-active");
      localStorage.removeItem("formRaiting"); formRaiting.value = "";
    } 
      
   if ((raitingErrorStr === "") && (formNameError.innerHTML === "")) {
    localStorage.removeItem("formText"); formText.value = "";
   }
 })