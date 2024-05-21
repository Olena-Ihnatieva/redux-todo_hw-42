import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const fetchTodos = createAsyncThunk(
  'todos/fetchTodos',
  async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    return response.json();
  }
);

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [
      {id: 1, title: 'First Todo', description: 'This is a first todo', done: false},
      {id: 2, title: 'Second Todo', description: 'This is a second todo', done: false},
      {id: 3, title: 'Third Todo', description: 'This is a third todo', done: false},
      {id: 4, title: 'Fourth Todo', description: 'This is a fourth todo', done: false},
      {id: 5, title: 'Fifth Todo', description: 'This is a fifth todo', done: false}
    ],
    status: 'idle',
    error: null,
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        id: Date.now(),
        title: action.payload.title,
        done: false,
      });
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find(todo => todo.id === action.payload.id);
      if (todo) {
        todo.done = !todo.done;
      }
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = 'idle';
        state.todos = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.error.message;
      });
  },
});

export const {addTodo, toggleTodo, deleteTodo} = todoSlice.actions;

export default todoSlice.reducer;
