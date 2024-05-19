import {ADD_TODO, REMOVE_TODO} from './actions';

const initialState = {
  todos: [
    { id: 1, title: 'First Todo', description: 'This is a first todo', done: false },
    { id: 2, title: 'Second Todo', description: 'This is a second todo', done: false },
    { id: 3, title: 'Third Todo', description: 'This is a third todo', done: false },
    { id: 4, title: 'Fourth Todo', description: 'This is a fourth todo', done: false },
    { id: 5, title: 'Fifth Todo', description: 'This is a fifth todo', done: false }
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const newTodo = {
        id: state.todos.length + 1,
        title: action.payload.title,
        done: false
      };
      return {
        ...state,
        todos: [...state.todos, newTodo]
      };
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload.id)
      };
    default:
      return state;
  }
};

export default reducer;