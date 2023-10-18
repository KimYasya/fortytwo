import React, { useState } from "react";
import { removeToDo } from "../../store/reducers/toDo-reducer";
import Popup from "../../components/Popup/Popup";
import { useDispatch } from 'react-redux';
import Modal from "../Modal/Modal";



import "./ToDo.css";



export default function ToDo({ toDo }) {

  const [popupContent, setPopupContent] = useState({})
  const [isPopup, setPopup] = useState(false);
  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  const dispatch = useDispatch();

  const deleteToDo = (e) => {
    dispatch(removeToDo({
      ...toDo,
    }));
  }

  const updateToDo = (e, toDo) => {
    setUpdateModalOpen(true);
  }

  function handleClickPopup(e, toDo) {
    setPopupContent(toDo);
    setPopup(true);
  }


  return (
    <div className="todo__items">
      <div role="button" onClick={(e) => handleClickPopup(e, toDo)} type="button" className="item">
        <div className="btn__text">
          <b>{toDo.title}</b>
          <p>{toDo.description}</p>
          <span style={{ textAlign: "right" }}>{toDo.time}</span>
        </div>
      </div>
      <div className="action__btns">
        <div
          className="item svg"
          role="button"
          onClick={(e) => deleteToDo(toDo.id)}
          onKeyDown={(e) => deleteToDo(toDo.id)}
          tabIndex={0}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23 4.5C23 3.67158 22.3285 3 21.5 3H17.724C17.0921 1.20736 15.4007 0.00609375 13.5 0H10.5C8.59928 0.00609375 6.90789 1.20736 6.27602 3H2.5C1.67158 3 1 3.67158 1 4.5C1 5.32842 1.67158 6 2.5 6H3.00002V18.5C3.00002 21.5376 5.46245 24 8.5 24H15.5C18.5376 24 21 21.5376 21 18.5V6H21.5C22.3285 6 23 5.32842 23 4.5ZM18 18.5C18 19.8807 16.8807 21 15.5 21H8.5C7.1193 21 6.00002 19.8807 6.00002 18.5V6H18V18.5Z" fill="#374957" />
            <path d="M9.5 18C10.3284 18 11 17.3284 11 16.5V10.5C11 9.67158 10.3284 9 9.5 9C8.67158 9 8 9.67158 8 10.5V16.5C8 17.3284 8.67158 18 9.5 18Z" fill="#374957" />
            <path d="M14.5 18C15.3284 18 16 17.3284 16 16.5V10.5C16 9.67158 15.3284 9 14.5 9C13.6716 9 13 9.67158 13 10.5V16.5C13 17.3284 13.6716 18 14.5 18Z" fill="#374957" />
          </svg>
        </div>

        <div
          className="item svg"
          onClick={(e) => updateToDo()}
          onKeyDown={(e) => updateToDo()}
          tabIndex={0}
          role="button"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_405_1452)">
              <path d="M22.8242 1.176C22.0598 0.44565 21.0433 0.0380859 19.9862 0.0380859C18.929 0.0380859 17.9125 0.44565 17.1482 1.176L1.61115 16.713C1.09906 17.2223 0.693017 17.828 0.416497 18.4952C0.139976 19.1624 -0.00153325 19.8778 0.00015221 20.6V22.5C0.00015221 22.8978 0.158187 23.2794 0.439492 23.5607C0.720797 23.842 1.10233 24 1.50015 24H3.40015C4.12271 24.0019 4.83847 23.8606 5.50602 23.584C6.17356 23.3075 6.77964 22.9013 7.28915 22.389L22.8242 6.852C23.5757 6.09874 23.9978 5.07809 23.9978 4.014C23.9978 2.9499 23.5757 1.92926 22.8242 1.176ZM5.16615 20.268C4.69654 20.7346 4.06213 20.9975 3.40015 21H3.00015V20.6C3.00221 19.9373 3.26519 19.3022 3.73215 18.832L15.3002 7.267L16.7332 8.7L5.16615 20.268ZM20.7002 4.731L18.8542 6.58L17.4202 5.146L19.2702 3.3C19.4631 3.11558 19.7197 3.01266 19.9867 3.01266C20.2536 3.01266 20.5102 3.11558 20.7032 3.3C20.8918 3.49056 20.9973 3.748 20.9967 4.01612C20.9962 4.28423 20.8896 4.54123 20.7002 4.731Z" fill="#374957" />
            </g>
            <defs>
              <clipPath id="clip0_405_1452">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>

      <Popup key={popupContent.id}
        isVisible={isPopup}
        popupContent={popupContent.description}
        title={popupContent.title}
        deadline={popupContent.deadline}
        number={`${popupContent.title}/${popupContent.time}`}
        status={popupContent.status}
        creationDate={popupContent.time}
        priority={popupContent.priority}
        onClose={(e) => { setPopupContent({}); setPopup(false) }}
      />

      <Modal isVisible={updateModalOpen} onClose={(e) => setUpdateModalOpen(false)} type="update" toDo={toDo} />
    </div>
  )
}