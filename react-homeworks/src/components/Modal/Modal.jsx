import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToDo, updateToDo } from "../../store/reducers/toDo-reducer";
import { v4 as uuid } from "uuid";
import "./Modal.css";



const Modal = ({ isVisible = false, onClose, type, toDo }) => {

  const [ title, setTitle ] = useState();
  const [ priority, setPriority ] = useState();
  const [ description, setDescription ] = useState();
  const [ status, setStatus ] = useState();
  const [deadline, setDeadline] = useState();

  
  const dispatch = useDispatch();

  function handleClickAdd(e) {
       
    if (status === "") {
      alert("Вы не ввели статус")
      return;
    } 

    if (title && status ) {
      if (type === "add") {
        dispatch(addToDo({
          id: uuid(),
          title,
          priority,
          description,
          time: new Date().toISOString().slice(0, 10),
          deadline,
          status,
        }))
        alert("Вы добавили новую задачу")
      }
    }

    if (type === "update") {
      if (toDo.title !== title || toDo.status !== status) {
        dispatch(updateToDo({
          ...toDo,
          title,
          priority,
          description,
          deadline,
          status,
        }))
      } else {
        alert("Нет изменений");
      }
    }
    
  }
  
useEffect(() => {
  if (type === "update" && toDo) {
    setTitle(toDo.title);
    setStatus(toDo.status);
    setDescription(toDo.description);
    setPriority(toDo.priority);
    setDeadline(toDo.deadline);
  } else {
    setTitle("");
    setStatus("");
    setDescription("");
    setPriority("");
    setDeadline("");
  }
}, [ type, toDo, isVisible ])

  const keydownHandler = ({ key }) => {
    switch (key) {
      case 'Escape':
        onClose();
        break;
      default:
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', keydownHandler);
    return () => document.removeEventListener('keydown', keydownHandler);
  });

  return !isVisible ? null : (
    <div className="modal" onClick={onClose}>
      <div className="modal-dialog" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h3 className="modal-title">{type === "update" ? "Редактировать" : "Добавить"} задачу</h3>
          <span className="modal-close" onClick={onClose}>
            &times;
          </span>
        </div>

        <div className="modal-body">
          <div className="modal-content">

            <form className="addtask">

              <span>Заголовок</span>
              <input className="addtask__title"
                type="text"
                name="title"
                placeholder="Заголовок"
                value={title}
                onChange={(e) => setTitle(e.target.value)} />

              <span>Статус</span>
              <select name="user_profile_priority"
                className="addtask__priority"
                onChange={(e) => setStatus(e.target.value)}>
                <option value=""></option>
                <option value="Неначатое">Неначатое</option>
                <option value="В работе">В работе</option>
                <option value="Завершенное">Завершенное</option>
              </select>

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
                  onClick={handleClickAdd}>{type === "update" ? "Редактировать" : "Добавить"} задачу</button>
              </div>



            </form>
          </div>
        </div>
      </div>

    </div>
  );

};

export default Modal;