import { useState } from 'react';
import InputToDo from './InputTodo';
import TodoList from './TodoList';
import { v4 as uuidv4 } from 'uuid';

const TodosLogic = () => {
  const [todo, setToDo] = useState([
    {
      id: uuidv4(),
      title: 'Setup development environment',
      completed: true,
    },
    {
      id: uuidv4(),
      title: 'Develop website and add content',
      completed: false,
    },
    {
      id: uuidv4(),
      title: 'Deploy to live server',
      completed: false,
    },
    {
      id: uuidv4(),
      title: 'Deploy to live',
      completed: false,
    },
  ]
  );

//   const deleteButton = (id) => {
//   setToDo([
//     ...todo.filter((todo) => {
//       return todo.id !== id;
//     }),
//   ]);
// };
  const addTodoItem = (title) => {
  const newTodo = {
    id: uuidv4(),
    title: title,
    completed: false,
  };
  setToDo([...todo, newTodo]);
}
  console.log(todo)
  return (
      <div>
          <InputToDo addTodoItem={addTodoItem} />
          <TodoList todo={todo} setToDo={setToDo}  />
      </div>
  );
};
export default TodosLogic;
