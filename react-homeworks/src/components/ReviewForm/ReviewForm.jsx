import React from "react";
import { useState } from "react";
import "./ReviewForm.css";

export default function ReviewForm() {
  
  const [formName, setFormName] = useState(localStorage.getItem("formName"));
  const [formRaiting, setFormRaiting] = useState(localStorage.getItem("formRaiting"));
  const [formText, setFormText] = useState(localStorage.getItem("formText"));

  const [formNameErrorStr, setFormNameErrorStr] = useState("");
  const [formRaitingErrorStr, setFormRaitingErrorStr] = useState("");

    
  localStorage.setItem("formName", formName);
  localStorage.setItem("formRaiting", formRaiting);
  localStorage.setItem("formText", formText);

  function handleChangeFormName(event) {
    setFormName(event.target.value);
  }

  function handleChangeFormRaiting (event) {
    setFormRaiting(event.target.value);
  };

  function handleChangeFormText (event) {
    setFormText(event.target.value);
  };

  // Вот этот кусок как раз и не хочет работать =*(

  // function handleClickButton() {

  //   if ((formNameErrorStr === '') && (formRaitingErrorStr === '')) {
  //     setFormName("");
  //     setFormRaiting("");
  //     setFormText("");
  //     localStorage.removeItem("formName", formName);
  //     localStorage.removeItem("formRaiting", formRaiting);
  //     localStorage.removeItem("formText", formText);
  //     console.log("Отправлено");
  //   }
  // };

  function handleSubmitForm (event) {
    event.preventDefault();

    if (formName === "") {
      setFormNameErrorStr("Вы забыли указать имя и фамилию");
    } else if (formName.length < 2) {
      setFormNameErrorStr("Имя не может быть короче двух символов");
    } else {
      setFormNameErrorStr("");
    }

    if (formRaiting === "") {
      setFormRaitingErrorStr("Поле не заполнено: Оценка должна быть от 1 до 5");
    } else if (!formRaiting.match(/^\d+$/)) {
      setFormRaitingErrorStr("В поле введены буквы: Оценка должна быть от 1 до 5");
    } else if (!formRaiting.match(/^[1-5]$/)) {
      setFormRaitingErrorStr("Вы ввели цифры больше 5 или меньше 1: Оценка должна быть от 1 до 5");
    } else {
      setFormRaitingErrorStr("");
    }

  };

  

  return (
    <form className="review-form" onSubmit={ handleSubmitForm } >
      <legend className="review-form__header">Добавить свой отзыв</legend>
      <div className="review-form__first">
        <div className="review-form__name-block">
          <input className={`review-form__name ${formNameErrorStr ? "active" : ""}`} type="text" placeholder="Имя и фамилия" value={ formName } onInput={ handleChangeFormName } />
          {formNameErrorStr && <div className="formName-error">{formNameErrorStr}</div>}

        </div>

        <div className="review-form__raiting-block">
          <input className={`review-form__raiting ${formRaitingErrorStr ? "active" : ""}`} type="text" placeholder="Оценка" value={ formRaiting } onInput={ handleChangeFormRaiting } />
          {!formNameErrorStr && formRaitingErrorStr && <div className="formRaiting-error">{formRaitingErrorStr}</div>}
        </div>
      </div>

      <div className="review-form__second">
        <textarea className="review-form__text" type="text" classname="formText" placeholder="Текст отзыва" value={ formText } onInput={ handleChangeFormText }></textarea>
      </div>

      <div>
        {/* onClick={ handleClickButton }  Этот код из кнопки*/}
        <button type="submit" className="review-form__btn">Отправить отзыв</button> 
      </div>

    </form>
)
}