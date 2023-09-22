import { useState } from 'react';
import InputToDo from './InputTodo';
import TodoList from './TodoList';

const TodosLogic = () => {
  const [todo, setToDo] = useState([
    {
      id: 1,
      title: 'Setup development environment',
      completed: true,
    },
    {
      id: 2,
      title: 'Develop website and add content',
      completed: false,
    },
    {
      id: 3,
      title: 'Deploy to live server',
      completed: false,
    },
  ]
  );
    
  return (
      <div>
          <InputToDo />
          <TodoList todosProps={todo} setTodos={setToDo} />
      </div>
  );
};
export default TodosLogic;
