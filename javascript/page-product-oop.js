class Form {
  makeAlertAfterSubmitForm = () => {
    alert("Форма успешно отправлена!");
  }
}

class AddReviewForm extends Form {

  form = null;

  formName = null;
  formNameError = null;
  
  formRaiting = null;
  formRaitingError = null;
  
  formText = null;

  formBtn = null;
    
  nameErrorStr = "";
  raitingErrorStr = "";

  constructor(formQuerySelector) {
    super();

// Создание ссылок на html элементы
    this.form = document.querySelector(formQuerySelector);
    this.formName = document.querySelector(`${formQuerySelector} input[name="formName"]`);
    this.formNameError = document.querySelector(`${formQuerySelector} input[name="formName"] + div`);
    this.formRaiting = document.querySelector(`${formQuerySelector} input[name="formRaiting"]`);
    this.formRaitingError = document.querySelector(`${formQuerySelector} input[name="formRaiting"] + div`);
    this.formText = document.querySelector(`${formQuerySelector} textarea[name="formText"]`);

// localStorage

    this.formName.value = localStorage.getItem("formName");
    this.formName.oninput = () => {
          localStorage.setItem("formName", this.formName.value)
    };
    
    this.formRaiting.value = localStorage.getItem("formRaiting");
    this.formRaiting.oninput = () => {
          localStorage.setItem("formRaiting", this.formRaiting.value)
    };
    
    this.formText.value = localStorage.getItem("formText");
    this.formText.oninput = () => {
          localStorage.setItem("formText", this.formText.value)
    };
  }
       
// Валидация имени


  validateName = (nameValue) => {
      if (nameValue.value === "") { 
        this.nameErrorStr = "Поле не заполнено";
      } else if (nameValue.length < 2 ) { 
        this.nameErrorStr = "Имя не может быть короче 2-х символов";
      } else {
        this.nameErrorStr = "";
        console.log("Имя и Фамилия: ", nameValue);
      }
  }

// Валидация оценки

  validateRaiting = (raitingValue) => {
      if (!raitingValue) { 
        this.raitingErrorStr = "Оценка должна быть от 1 до 5";
      } else if (!raitingValue.match(/^\d+$/)) {
        this.raitingErrorStr = "Оценка должна быть от 1 до 5";
      } else if (!raitingValue.match(/^[1-5]$/)) {
        this.raitingErrorStr = "Оценка должна быть от 1 до 5";
      } else {
        this.raitingErrorStr = "";
        console.log("Оценка: ", raitingValue);
      }
  }

// Функция выполнения валидации

  submitForm = () => {
    this.form.addEventListener("submit", (e) => {
      e.preventDefault();

    // Валидация полей

    this.validateName(this.formName.value);
    this.validateRaiting(this.formRaiting.value);

    // Оформление поля имени
    if (this.nameErrorStr) {
      this.formNameError.innerHTML = this.nameErrorStr;
      this.formName.style.border = "1px solid #f36223";
      this.formNameError.classList.add("review-form__error-active");
    } else {
      this.formNameError.innerHTML = "";
      this.formName.style.border = "";
      this.formNameError.classList.remove("review-form__error-active");
    }
  

    // Оформление поля оценки
    if (this.raitingErrorStr) {
      this.formRaitingError.innerHTML = this.raitingErrorStr;
      this.formRaiting.style.border = "1px solid #f36223";
      this.formRaitingError.classList.add("review-form__error-active");
    } else {      
      this.formRaitingError.innerHTML = ""
      this.formRaiting.style.border = "";
      this.formRaitingError.classList.remove("review-form__error-active");  
    } 

    // Успешная валидация, сброс localStorage
    if (!this.nameErrorStr && !this.raitingErrorStr) {
      this.formName.value = "";
      this.formRaiting.value = "";
      this.formText.value = "";

      localStorage.removeItem("formName");
      localStorage.removeItem("formRaiting");
      localStorage.removeItem("formText");

      this.makeAlertAfterSubmitForm();
    }
  });
  };
}

// Создание экземпляра класса
const addForm = new AddReviewForm(".review-form");
addForm.submitForm();