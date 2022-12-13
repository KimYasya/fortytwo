import React from "react";
import "./SubTaskField.css";

export default function SubTaskField({ list, remove }) {
  return (
    <>
       {list.length > 0 ? (
        <ul className="todo-list">
          {list.map((entry, index) => (
            <div className="todo">
              <li className="li__style" key={index}> {entry} </li>

              <button
                className="delete-button"
                onClick={() => {
                  remove(entry);
                }}
              >
                Delete
              </button>
            </div>
          ))}
        </ul>
      ) : (
        <div className="empty">
          <p>No task found</p>
        </div>
      )}
    </>
  )
};

