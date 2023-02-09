import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import HeaderApp from "../../components/HeaderApp/HeaderApp";

import { useSelector } from 'react-redux';


import Modal from "../../components/Modal/Modal";
import "./TaskPage.css";
import ToDo from "../../components/ToDo/ToDo";

export default function TaskPage() {

  const [isModal, setModal] = useState(false);
  const toDoList = useSelector(store => store.toDo.toDoList);
  const sortedToDoList = [...toDoList];
  sortedToDoList.sort((a, b) => new Date(b.time) - new Date(a.time));



  const [boards] = useState([
    {
      id: 1,
      title: `Неначатое`,
    },
    {
      id: 2,
      title: `В работе`,
    },
    {
      id: 3,
      title: `Завершенное`,
    },
  ])

  const currentDate = (new Date()).toISOString().slice(0,10)
  

  return (
    <>
      <HeaderApp text={`To`} textTwo={`Do App`} />

      <div className="containerTodo">

        <div className="main__containerTodo">
          <div className="first-block">
            <div className="add-task">
              <div type="button" className="add-task__btn" onClick={() => setModal(true)}>Добавить задачу</div>
              <Modal
                isVisible={isModal}
                type="add"
                onClose={() => setModal(false)}
              /></div>
              <div className="currentDate">{currentDate}</div>
          </div>
          <div className="boards">
            {boards.map(board => (
              <div key={board.id} className="tasks" >
                <div className="tasks__title">{board.title}</div>
                {sortedToDoList.map(toDo =>
                  <div key={toDo.id} className="todo__items">
                    {board.title === toDo.status ?
                      <ToDo toDo={toDo} />
                      : ""}
                  </div>
                )}
              </div>
            ))}
          </div>
         
        </div>


      </div>
      <Footer />
    </>
  )
}
