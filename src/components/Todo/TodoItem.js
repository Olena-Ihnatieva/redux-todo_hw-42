import {useState} from 'react';
import {connect} from 'react-redux';

import {deleteTodo} from '../../store/actions';
import styles from './todo.module.css';

function TodoItem({todo, deleteTodo}) {
  const [checked, setChecked] = useState(todo.done);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  const handleDeleteTodo = (id) => {
    deleteTodo(id);
  }

  return (
    <div className={styles.todo_item}>
      <div className={styles.input_wrapper_item}>
        <input
          type="checkbox"
          checked={todo.done}
          onChange={handleCheckboxChange}
          className={styles.todo_checkbox}
        />
        <div
          className={`${styles.todo_title} ${checked ? styles.checked : ''}`}>{todo.title}
        </div>
      </div>
      <div
        className={styles.todo_btn}
        onClick={() => handleDeleteTodo(todo.id)}
      >
        Delete
      </div>
    </div>
  );
}

const mapDispatchToProps = {
  deleteTodo,
}

export default connect(() => ({}), mapDispatchToProps)(TodoItem)