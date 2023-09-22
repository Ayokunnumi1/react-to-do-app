import TodoItem from './TodoItem';

// eslint-disable-next-line react/prop-types
const TodoList = ({ todosProps, setTodos }) => {
   
    return (                                                                            
        <ul>
        {
            // eslint-disable-next-line react/prop-types
            todosProps.map((todo) => (
               <TodoItem key={todo.id}  itemProp={todo} setTodos={setTodos} />
            ))
        }
    </ul>
    );
}
export default TodoList