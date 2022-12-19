import { createSlice } from "@reduxjs/toolkit";

// localStorage.clear()

const getInitialToDo = () => {
  const localToDoList = localStorage.getItem("toDoList");
  if (localToDoList) {
    return JSON.parse(localToDoList)
  }
  localStorage.setItem("toDoList", JSON.stringify([]));
  return [];
}

const initialValue = {
  toDoList: getInitialToDo()
};

export const toDoSlice = createSlice({
  name: "toDo",

  initialState: initialValue,

  reducers: {

    addToDo: (state, action) => {
      state.toDoList.push(action.payload);
      const toDoList = localStorage.getItem("toDoList");

      if (toDoList) {
        const toDoListArr = JSON.parse(toDoList);
        toDoListArr.push({
          ...action.payload
        });
        localStorage.setItem("toDoList", JSON.stringify(toDoListArr));
      } else {
        localStorage.setItem("toDoList", JSON.stringify([{...action.payload}]))
      }

    },

    removeToDo: (state, action) => {
     
      const toDoList = localStorage.getItem("toDoList");

      if (toDoList) {
        const toDoListArr = JSON.parse(toDoList);
        toDoListArr.forEach((toDo, index) => {
          if (toDo.id === action.payload.id) {
            toDoListArr.splice(index, 1);
          }
        });
        localStorage.setItem("toDoList", JSON.stringify(toDoListArr));
        state.toDoList = toDoListArr;
      }
    },

    updateToDo: (state, action) => {
      const toDoList = localStorage.getItem("toDoList");
      if (toDoList) {
        const toDoListArr = JSON.parse(toDoList);
        toDoListArr.forEach((toDo, index) => {
          if (toDo.id === action.payload.id) {
            toDo.title = action.payload.title;
            toDo.status = action.payload.status;
            toDo.priority = action.payload.priority;
            toDo.deadline = action.payload.deadline;
            toDo.description = action.payload.description;
          }
        });
        localStorage.setItem("toDoList", JSON.stringify(toDoListArr));
        state.toDoList = toDoListArr;
      }
    }
  },
});

export const { addToDo, removeToDo, updateToDo } = toDoSlice.actions;

export default toDoSlice.reducer;

