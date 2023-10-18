import React from "react";
import "./SubTask.css";

export default function SubTask ({ todo, setTodo, addTodo })  {

  return (
    <div className="input-wrapper">
      <input
        className="add-input"
        type="text"
        name="todo"
        value={todo}
        placeholder="Add new task"
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <button className="add-button" onClick={addTodo}>
        Add
      </button>
    </div>
  );
};

