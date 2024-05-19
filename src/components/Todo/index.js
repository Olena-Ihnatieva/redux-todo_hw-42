import {connect} from 'react-redux';

import TodoItem from './TodoItem';
import NewTodo from './NewTodo';
import styles from './todo.module.css';


function Todo({todos}) {
  return (
    <div className={styles.todo_wrapper}>
      <h3 className={styles.todo_list_title}>Todo list</h3>
      <NewTodo />
      {todos.map(todo => <TodoItem key={todo.id} todo={todo}/>)}
    </div>
  );
}

const mapStateToProps = (state) => ({
  todos: state.todos,
});

export default connect(mapStateToProps)(Todo)

