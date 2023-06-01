import { combineReducers } from "redux";
import filterSlice from "../components/Filters/filterSlice";
import todoSlice from "../components/TodoList/todoSlice";



// const rootReducer = (state = {}, action) => {
//     return {
//         filters: filterReducer(state.filters, action),
//         todoList: todoListReducer(state.todoList, action),
//     }
// };

const rootReducer = combineReducers({
    filters: filterSlice.reducer,
    todoList: todoSlice.reducer,
});

export default rootReducer;
