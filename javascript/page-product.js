"use strict"

// Переменные

const form = document.querySelector(".review-form");

const formName = document.querySelector(".review-form__name");
const formNameError = document.getElementById("review-form-name-error");

const formRaiting = document.querySelector(".review-form__raiting");
const formRaitingError = document.getElementById("review-form-raiting-error");

const formText = document.querySelector(".review-form__text");

const addToCartBtn = document.getElementById("sidebar-button-buy");

const headerCount = document.querySelector(".header__cart-count");

let nameErrorStr = "";
let raitingErrorStr = "";

// Аттестация. Корзина и добавление в корзину

document.getElementById("header-count").classList.add("header-count__first-visit");

localStorage.getItem("headerCount", headerCount.innerHTML)

if (headerCount.innerHTML !== 0) {
  headerCount.innerHTML = localStorage.getItem("headerCount", headerCount.innerHTML)

  addToCartBtn.innerHTML = "Товар уже в корзине";
  addToCartBtn.style.background = "#888888";
  
  document.getElementById("header-count").classList.remove("header-count__first-visit");
}

addToCartBtn.addEventListener("click", (event) => {
  event.preventDefault();
  
  if (headerCount.innerHTML = localStorage.getItem("headerCount", headerCount.innerHTML)) {

    headerCount.innerHTML--;
    addToCartBtn.innerHTML = "Добавить в корзину";
    addToCartBtn.style.background = "";

    localStorage.removeItem("headerCount", headerCount.innerHTML)
    
  } else {

    headerCount.innerHTML++;

    document.getElementById("header-count").classList.remove("header-count__first-visit");
    addToCartBtn.innerHTML = "Товар уже в корзине"
    addToCartBtn.style.background = "#888888";

    localStorage.setItem("headerCount", headerCount.innerHTML)
  }
  });





// Форма добавления отзыва

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
    } else if (formName.value.length < 2 ) { 
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