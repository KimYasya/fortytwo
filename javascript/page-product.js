"use strict"

let form = document.querySelector(".review-form");

let formName = document.querySelector(".review-form__name");
let formNameError = document.getElementById("review-form-name-error");

let formRaiting = document.querySelector(".review-form__raiting");
let formRaitingError = document.getElementById("review-form-raiting-error");

let btnForm = document.querySelector(".review-form__btn");

let nameErrorStr = "";
let raitingErrorStr = "";


form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("Имя и Фамилия: ", formName.value)
  console.log("Оценка: ", formRaiting.value)
})

btnForm.addEventListener("click", (e) => {
  e.preventDefault();

  if (!formName.value) { 
    nameErrorStr = "Поле не заполнено";
  } else if (formName.value.length <= 2 ) { 
    nameErrorStr = "Имя не может быть короче 2-х символов";
  } else {
    console.log(formName.value);
  }

  if (!formRaiting.value) { 
    raitingErrorStr = "Оценка должна быть от 1 до 5";
  } else if (!formRaiting.value.match(/^\d+$/)) {
    raitingErrorStr = "Оценка должна быть от 1 до 5";
  } else if (!formRaiting.value.match(/^[1-5]$/)) {
    raitingErrorStr = "Оценка должна быть от 1 до 5";
  } else {
    console.log(formRaiting.value);
  }

  if (nameErrorStr) {
    formNameError.innerHTML = nameErrorStr;
    formName.style.border = "1px solid #f36223";
    formNameError.classList.add("review-form__error-active");
  } else {
    formNameError.innerHTML = "";
    formName.style.border = "";
    formNameError.classList.remove("review-form__error-active");
  }

  if (raitingErrorStr) {
    formRaitingError.innerHTML = raitingErrorStr;
    formRaiting.style.border = "1px solid #f36223";
    formRaitingError.classList.add("review-form__error-active");
  } else {
    formRaitingError.innerHTML = "";
    formRaiting.style.border = "";
    formRaitingError.classList.remove("review-form__error-active");
  }

 
})



