import { createSelector } from "@reduxjs/toolkit";

export const statusFilterChange = (state) => state.filters.status;
export const searchTextSelector = (state) => state.filters.search;
export const filterPriorities = (state) => state.filters.priorities;
export const todoListSelector = (state) => state.todoList;

export const todosRemainingSelector = createSelector(
    todoListSelector,
    searchTextSelector,
    statusFilterChange,
    filterPriorities,
    (todoList, searchText, status, priorities) => {
        return todoList.filter((todo) => {
            if (status === "All") {
                return priorities.length
                    ? todo.name.includes(searchText) &&
                    priorities.includes(todo.priority)
                    : todo.name.includes(searchText);
            }

            return (
                todo.name.includes(searchText) &&
                (status === "Completed" ? todo.completed : !todo.completed) &&
                (priorities.length ? priorities.includes(todo.priority) : true)
            );
        });
    }
);
