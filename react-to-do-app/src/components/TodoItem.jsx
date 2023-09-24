import '../modules/TodoItem.css';
import PropTypes from 'prop-types';

const TodoItem = ({ itemProp, setToDo }) => {
    const handleChange = (id) => {
        console.log(id)
        setToDo((prevState) => 
            prevState.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed,
                    };
                }
                return todo;
            })
        )
    }
    const deleteButton = (id) => {
        setToDo((prevState) =>  
     prevState.filter((todo) => {
      return todo.id !== id;
    }),)
};
    return (
        <div className="list-checkbox-container">
            <input type="checkbox" className="list-checkbox"
                onChange={() => handleChange(itemProp.id)}
                checked={itemProp.completed}
            />
            <li>{itemProp.title}</li>
            <button onClick={() => deleteButton(itemProp.id)} >Delete</button>
        </div>
    );
}

TodoItem.propTypes = {
    itemProp: PropTypes.object.isRequired,
    setToDo: PropTypes.func.isRequired,
    // deleteButton: PropTypes.func.isRequired
}
export default TodoItem;