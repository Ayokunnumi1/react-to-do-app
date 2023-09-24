import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

const TodosList = ({ todo, setToDo }) => {
  return (
    <ul>
      {todo.map((tod) => (
        <TodoItem key={tod.id} itemProp={tod} setToDo={setToDo} />
      ))}
    </ul>
  );
};

TodosList.propTypes = {
    todo: PropTypes.array.isRequired,
    setToDo: PropTypes.func.isRequired,
   }
export default TodosList;
