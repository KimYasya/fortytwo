import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToDo } from "../../store/reducers/toDo-reducer";
import "./AddTaskForm.css";
import { v4 as uuid } from "uuid";

export default function AddTaskForm() {

  const [title, setTitle] = useState();
  const [priority, setPriority] = useState();
  const [description, setDescription] = useState();
  const [ deadline, setDeadline ] = useState();

  const dispatch = useDispatch();

  function handleClickAdd(e) {
    dispatch(addToDo({
      id: uuid(),
      title,
      priority,
      description,
      time: new Date().toISOString().slice(0, 10),
      deadline,
    }))

    alert("Вы добавили новую задачу")
    console.log(addToDo)
  }

  
  return (
    <form className="addtask">

      <span>Заголовок</span>
      <input className="addtask__title" 
             type="text" 
             name="title" 
             placeholder="Заголовок" 
             value={title}
             onChange={(e) => setTitle(e.target.value)} />

      <span>Приоритет</span>       
      <select name="user_profile_priority" 
              className="addtask__priority" 
              onChange={(e) => setPriority(e.target.value)}>
        <option value=""></option>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>

      <span>Описание задачи</span>
      <input className="addtask__description" 
             type="text" 
             name="description" 
             placeholder="Описание" 
             value={description}
             onChange={(e) => setDescription(e.target.value)} />

      <span>Дата завершения</span>
      <input className="addtask__description" 
             type="date" 
             name="description"
             value={deadline} 
             onChange={(e) => setDeadline(e.target.value)} />

      <div>
        <button type="submit" 
                className="addtask__btn" 
                onClick={handleClickAdd}>Добавить задачу</button>
      </div>



    </form>
  )
}