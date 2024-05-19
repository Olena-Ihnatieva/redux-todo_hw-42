export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

export const addTodo = (title) => ({
  type: ADD_TODO,
  payload: {
    title
  }
})

export const deleteTodo = (id) => ({
  type: REMOVE_TODO,
  payload: {
    id
  }
})