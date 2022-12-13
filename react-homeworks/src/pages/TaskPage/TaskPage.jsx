import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import HeaderApp from "../../components/HeaderApp/HeaderApp";
import Popup from "../../components/Popup/Popup";
import Modal from "../../components/Modal/Modal";
import "./TaskPage.css";



export default function TaskPage() {

  const [boards, setBoards] = useState([
    {
      id: 1,
      title: `Queue`,
      items: [{
        id: 1,
        title: "Сделать деплой приложения",
        content: "Описание задачи 1",
        footer: `Дата завершения: 1 декабря`,
        creationDate: "Дата создания: 21 ноября 2022 г.",
        priority: "High",
        status: "In process",
      },
      {
        id: 2,
        title: "Найти материалы",
        content: "Описание задачи 2",
        footer: `дата завершения: 2 декабря`,
        creationDate: "Дата создания: 22 ноября 2022 г.",
        priority: "Middle",
        status: "In process",
      },
      {
        id: 3,
        title: "Изучить недостающие темы",
        content: "Описание задачи 3",
        footer: `дата завершения: 3 декабря`,
        creationDate: "Дата создания: 23 ноября 2022 г.",
        priority: "High",
        status: "In process",
      }]
    },
    {
      id: 5,
      title: `Development`,
      items: [{
        id: 4,
        title: "Code review",
        content: "Описание задачи 4",
        footer: `дата завершения: 4 декабря`,
        creationDate: "Дата создания: 24 ноября 2022 г.",
        priority: "High",
        status: "In process",
      }]
    },
    {
      id: 7,
      title: `Done`,
      items: [{
        id: 5,
        title: "Создать ToDo приложение",
        content: "Описание задачи 5",
        footer: `дата завершения: 5 декабря`,
        creationDate: "Дата создания: 24 ноября 2022 г.",
        priority: "Low",
        status: "In process",
      }]
    },
  ])

  const [currentBoard, setCurrentBoard] = useState(null);
  const [currentItem, setCurrentItem] = useState(null);
  const [isPopup, setPopup] = useState(false);
  const [popupContent, setPopupContent] = useState({})
  const [isModal, setModal] = useState(false);

 
  function handleClickPopup(e, item) {
    setPopupContent(item);
    setPopup(true);
  }

  function dragStartHandler(e, board, item) {
    setCurrentBoard(board);
    setCurrentItem(item);
  }

  function dragEndHandler(e) {
    e.currentTarget.style.boxShadow = "none";
  }

  function dragLeaveHandler(e) {
    e.currentTarget.style.boxShadow = "none";
  }

  function dragOverHandler(e) {
    e.preventDefault();
    if (e.target.className === "item") {
      e.currentTarget.style.boxShadow = "0 4px 3 px grey";
    }

  }

  function dropHandler(e, board, item) {
    const currentIndex = currentBoard.items.indexOf(currentItem)
    currentBoard.items.splice(currentIndex, 1)
    const dropIndex = board.items.indexOf(item)
    board.items.splice(dropIndex + 1, 0, currentItem)

    setBoards(boards.map(b => {
      if (b.id === board.id) {
        return board
      }
      if (b.id === currentBoard.id) {
        return currentBoard
      }
      return b
    }))
  }

  function dropCard(e, board) {
    board.items.push(currentItem)
    const currentIndex = currentBoard.items.indexOf(currentItem)
    currentBoard.items.splice(currentIndex, 1)
    setBoards(boards.map(b => {
      if (b.id === board.id) {
        return board
      }
      if (b.id === currentBoard.id) {
        return currentBoard
      }
      return b
    }))
    e.target.style.boxShadow = "none"
  }

  
  return (
    <div>

      <HeaderApp text={`To`} textTwo={`Do App`} />

      <div className="containerTodo">


        <div className="main__containerTodo">
          <div className="first-block">
            <div className="add-task">
              <button type="button" className="add-task__btn" onClick={() => setModal(true)}>Add Task</button>
              <Modal

                isVisible={isModal}
                title="Добавить задачу"
                onClose={() => setModal(false)}
              /></div>

           
          </div>

          <div className="boards">
            {boards.map(board =>
              <div key={board.id}
                onDragOver={(e) => dragOverHandler(e)}
                onDrop={(e) => dropCard(e, board)}
                className="tasks">
                <div className="tasks__title">{board.title}</div>
                {board.items.map(item =>

                  <button
                    key={item.id}
                    onClick={(e) => handleClickPopup(e, item)}
                    className="item"
                    onDragStart={(e) => dragStartHandler(e, board, item)}
                    onDragLeave={(e) => dragLeaveHandler(e)}
                    onDragEnd={(e) => dragEndHandler(e)}
                    onDragOver={(e) => dragOverHandler(e)}
                    onDrop={(e) => dropHandler(e, board, item)}
                    draggable={"true"}>{item.title}</button>

                )}

              </div>
            )}
            <Popup key={popupContent.id}
              isVisible={isPopup}
              popupContent={popupContent.content}
              title={popupContent.title}
              footer={popupContent.footer}
              number={popupContent.id}
              creationDate={popupContent.creationDate}
              priority={popupContent.priority}
              status={popupContent.status}
              onClose={(e) => { setPopupContent({}); setPopup(false) }}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}



