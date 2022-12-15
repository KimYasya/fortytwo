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
  },
});

export const { addToDo } = toDoSlice.actions;

export default toDoSlice.reducer;

