import {useState} from 'react';
import {connect} from 'react-redux';

import {addTodo} from '../../store/actions';
import styles from './todo.module.css';



function NewTodo({addTodo}) {
  const [newTodo, setNewTodo] = useState('');
  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      addTodo(newTodo);
      setNewTodo('');
    }
  };
  return (
    <div className={styles.input_wrapper}>
      <input
        type='text'
        value={newTodo}
        placeholder='New task'
        className={styles.todo_input}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <div className={styles.add_todo} onClick={handleAddTodo}>
        Add
      </div>
    </div>
  )
}

const mapDispatchToProps = {
  addTodo,
}
export default connect(() => ({}), mapDispatchToProps)(NewTodo)
