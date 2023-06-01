// import { createStore } from 'redux';
// import rootReducer from './reducer';
// import { composeWithDevTools } from 'redux-devtools-extension'

// const composeEnhancers = composeWithDevTools();
// const store = createStore(rootReducer, composeEnhancers);

import { configureStore } from '@reduxjs/toolkit'
import filterSilce from '../components/Filters/filterSlice';
import todoSlice from '../components/TodoList/todoSlice';

const store = configureStore({
    reducer: {
        filters: filterSilce.reducer,
        todoList: todoSlice.reducer,
    }
});

export default store;

