import { ADD_TODO_ITEM, TODO_ITEM_COMPLETE } from '../constants/ActionTypes'

export const addTodoItem = todoItem => ({ type: ADD_TODO_ITEM, payload: todoItem });
export const todoItemComplete = todoId => ({ type: TODO_ITEM_COMPLETE, payload: todoId });