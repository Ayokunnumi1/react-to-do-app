/* eslint-disable react/jsx-no-comment-textnodes */
import '../modules/TodoItem.css';

// eslint-disable-next-line react/prop-types
const TodoItem = ({ itemProp, setTodos }) => {
    const handleChange = (id) => {
        console.log(id)
        setTodos((prevState) => {
            prevState.map((prev) => {
                if (prev.id === id) {
                    return {
                        ...prev,
                        completed: !prev.completed,
                    };
                }
                return prev;
            })
        })
    }
    return (
        <div className="list-checkbox-container">
            <input type="checkbox" className="list-checkbox"
                // eslint-disable-next-line react/prop-types
                checked={itemProp.completed}
                // eslint-disable-next-line react/prop-types
                onChange={() => handleChange(itemProp.id)}
            />
        // eslint-disable-next-line react/prop-types, react/prop-types
        <li>{ itemProp.title}</li>
        </div>
    );
}
export default TodoItem;