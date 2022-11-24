import React from "react";
import { useState } from "react";
import "./ReviewForm.css";

export default function ReviewForm() {

  const [formName, setFormName] = useState(localStorage.getItem("formName") || "");
  const [formRaiting, setFormRaiting] = useState(localStorage.getItem("formRaiting") || "");
  const [formText, setFormText] = useState(localStorage.getItem("formText") || "");

  const [formNameErrorStr, setFormNameErrorStr] = useState("");
  const [formRaitingErrorStr, setFormRaitingErrorStr] = useState("");


  // Сброс информеров ошибок при повторном вводе после неуспешной валидации
  const handleFocusFormName = () => {
    setFormNameErrorStr("");
  };

  const handleFocusFormRaiting = () => {
    setFormRaitingErrorStr("");
  };

  // Изменение локальных стейтов полей (Контролируемый компонент)
  const handleInputFormName = (event) => {
    localStorage.setItem("formName", event.target.value);
    setFormName(event.target.value);
  };

  const handleInputFormRaiting = (event) => {
    localStorage.setItem("formRaiting", event.target.value);
    setFormRaiting(event.target.value);
  };

  const handleInputFormText = (event) => {
    localStorage.setItem("formText", event.target.value);
    setFormText(event.target.value);
  };

  // Валидация полей, set локальных стейтов для ошибок

  const validateName = () => {
    if (formName === "") {
      setFormNameErrorStr("Вы забыли указать имя и фамилию");
      return false;
    } else if (formName.length < 2) {
      setFormNameErrorStr("Имя не может быть короче двух символов");
      return false;
    } else {
      setFormNameErrorStr("");
      return true;
    }
  };

  const validateRaiting = () => {
    if (formRaiting === "") {
      setFormRaitingErrorStr("Поле не заполнено: Оценка должна быть от 1 до 5");
      return false;
    } else if (!formRaiting.match(/^\d+$/)) {
      setFormRaitingErrorStr("В поле введены буквы: Оценка должна быть от 1 до 5");
      return false;
    } else if (!formRaiting.match(/^[1-5]$/)) {
      setFormRaitingErrorStr("Вы ввели цифры больше 5 или меньше 1: Оценка должна быть от 1 до 5");
      return false;
    } else {
      setFormRaitingErrorStr("");
      return true;
    }
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();

    if (validateName() && validateRaiting()) {
      setFormName("");
      setFormRaiting("");
      setFormText("");

      localStorage.removeItem("formName");
      localStorage.removeItem("formRaiting");
      localStorage.removeItem("formText");

      alert("Ваш отзыв был успешно отправлен и будет отображён после модерации");
    }
  };

  return (
    <form className="review-form" onSubmit={handleSubmitForm} >
      <legend className="review-form__header">Добавить свой отзыв</legend>
      <div className="review-form__first">
        <div className="review-form__name-block">
          <input className={`review-form__name ${formNameErrorStr ? "active" : ""}`}
            type="text"
            placeholder="Имя и фамилия"
            value={formName}
            onInput={handleInputFormName}
            onFocus={handleFocusFormName} />
          {formNameErrorStr && <div className="formName-error">{formNameErrorStr}</div>}

        </div>

        <div className="review-form__raiting-block">
          <input className={`review-form__raiting ${formRaitingErrorStr ? "active" : ""}`}
            type="text"
            placeholder="Оценка"
            value={formRaiting}
            onInput={handleInputFormRaiting}
            onFocus={handleFocusFormRaiting}
          />
          {!formNameErrorStr && formRaitingErrorStr && <div className="formRaiting-error">{formRaitingErrorStr}</div>}
        </div>
      </div>

      <div className="review-form__second">
        <textarea className="review-form__text"
          type="text"
          placeholder="Текст отзыва"
          value={formText}
          onInput={handleInputFormText}></textarea>
      </div>

      <div>
        <button type="submit" className="review-form__btn">Отправить отзыв</button>
      </div>

    </form>
  )
}