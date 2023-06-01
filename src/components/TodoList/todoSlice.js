import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
    name: "todoList",
    initialState: [
        { id: 1, name: "Learn Redux", priority: "High", completed: true },
        { id: 2, name: "Learn React", priority: "Medium", completed: false },
        { id: 3, name: "Learn NodeJs", priority: "Low", completed: false },
    ],
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload);
        },
        toggleTodoStatus: (state, action) => {
            const currentTodo = state.find((todo) => todo.id === action.payload);
            if (currentTodo) {
                currentTodo.completed = !currentTodo.completed;
            }
        },
    },
});

// const initState = [
//     { id: 1, name: "Learn Redux", priority: "High", completed: true },
//     { id: 2, name: "Learn React", priority: "Medium", completed: false },
//     { id: 3, name: "Learn NodeJs", priority: "Low", completed: false },
// ];

// const todoListReducer = (state = initState, action) => {
//     switch (action.type) {
//         case "todoList/addTodo":
//             return [...state, action.payload];
//         case "todoList/toggleTodoStatus":
//             return state.map((todo) =>
//                 todo.id === action.payload
//                     ? { ...todo, completed: !todo.completed }
//                     : todo
//             );
//         default:
//             return state;
//     }
// };

// export default todoListReducer;
