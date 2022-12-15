import React, { useState, useEffect } from "react";
import SubTask from "../SubTask/SubTask";
import SubTaskField from "../SubTaskField/SubTaskField";
import { DropZone } from "../DragDrop/DropZone";
import "./Popup.css";



const Popup = ({ isVisible = false, popupContent, number, creationDate, priority, title, deadline, onClose }) => {

   // localStorage.clear()

   const text = [
      { isEdit: false, text: '' },
   ]
   const [objArr, setObjArr] = useState(text);
   const [btnStart, setBtnStart] = useState(localStorage.getItem("btnStart") || false);
   const [todos, setTodos] = useState([]);
   const [todo, setTodo] = useState("");


   const addTodo = () => {
      if (todo !== "") {
         setTodos([...todos, todo]);
         setTodo("");
      }
   };

   const deleteTodo = (text) => {
      const newTodos = todos.filter((todo) => {
         return todo !== text;
      });
      setTodos(newTodos);

   };

   function editSave(e, index) {
      // сохранение изменений (при изменении текста в input)
      const copy = Object.assign([], objArr);
      copy[index].text = e.target.value;
      setObjArr(copy);
   }

   function editStart(index) {
      // начало редактирования (клик по строке)
      const copy = Object.assign([], objArr);
      copy[index].isEdit = true;
      setObjArr(copy);
   }

   function editEnd(index) {
      // окончание изменений (скрытие input поля и показ результата)
      const copy = Object.assign([], objArr);
      copy[index].isEdit = false;
      setObjArr(copy);
   }


   function handleClickStart(e) {
      setBtnStart(!btnStart);
      localStorage.setItem("btnStart", btnStart)
   }

   if (!btnStart) {
      localStorage.removeItem("btnStart", btnStart)
   }


   const result = objArr.map((obj, index) => {

      let element;
      if (obj.isEdit) {
         element = <div className="popup-element">
            <textarea className="popup-text__edit"
                   value={obj.text}
                   onChange={(e) => editSave(e, index)}
            />
            <button onClick={() => editEnd(index)} className="popup-element__btn pressed">Сохранить</button>
         </div>
      } else {
         element = <div className="popup-element">
            <div className="popup-element__text">
               {obj.text}
            </div>
            <div className="popup-element__btn-block">
               <button className="popup-element__btn" onClick={() => editStart(index)}>Редактировать</button>
            </div>
         </div>;
      }

      return <div key={index}> {element}</div>;
   });


   const keydownHandler = ({ key }) => {

      switch (key) {
         case "Escape":
            onClose();
            break;
         default:
      }
   };

   useEffect(() => {
      document.addEventListener("keydown", keydownHandler);
      return () => document.removeEventListener("keydown", keydownHandler);
   });

   return !isVisible ? null : (
      <div className="popup" onClick={onClose}>
         <div className="popup-dialog" onClick={e => e.stopPropagation()}>
            <div className="popup-number">
               <span>Задача № {number} - {btnStart ? `В работе` : `Ожидает выполнения` }</span>
            </div>
            <div className="popup-header">

               <div className="popup-header__info">

                  <h3 className="popup-title">{title}</h3>
                  <div><span>Priority:</span><span className="priority">{priority}</span></div>
               </div>
            </div>
            <div className="popup-content">
               <div>{popupContent}</div>
               <div>{result}</div>

               <div>
                  <DropZone />
               </div>

               <div>
                  <h4>Добавить подзадачу</h4>
                  <SubTask todo={todo} setTodo={setTodo} addTodo={addTodo} />
                  <SubTaskField list={todos} remove={deleteTodo} />
               </div>
            </div>
            <footer> <div className="popup-footer">

               <div className="popup-footer__btns">
                  <button type="button" onClick={handleClickStart} className={!btnStart ? "popup-footer__btn" : "popup-footer__btn_active"}>{!btnStart ? "Начать выполнение" : "В работе"}</button>
                  <button onClick={onClose} className="popup-footer__btn">Закрыть</button></div>

               <div className="popup-footer__datas">
                  <div className="footer__datas">
                     <span>Дата начала работы</span>
                     {creationDate}
                  </div>

                  <div className="footer__datas">
                     <span>Дата окончания работы</span>
                     {deadline}
                  </div>
               </div>
            </div>
            </footer>
         </div>

      </div>


   );
};

export default Popup;