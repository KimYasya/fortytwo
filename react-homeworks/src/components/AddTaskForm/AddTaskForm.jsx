import React from "react";
import "./AddTaskForm.css";

export default function AddTaskForm() {

  function handleClickAdd(e) {
    e.preventDefault();
    alert("Вы добавили новую задачу")
  }

  return (
    <form className="addtask">

      <input className="addtask__title" type="text" name="title" placeholder="Заголовок" />
      <input className="addtask__priority" type="text" name="priority" placeholder="Приоритет" />
      <input className="addtask__description" type="text" name="description" placeholder="Описание" />

      <span>Дата завершения</span>
      <input className="addtask__description" type="date" name="description"  />
  
      <div>
        <button type="submit" className="addtask__btn" onClick={handleClickAdd}>Добавить задачу</button>
      </div>



    </form>
  )
}