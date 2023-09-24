import { useState } from 'react';
import Proptypes from 'prop-types';

const InputTodo = ({addTodoItem}) => {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  
  
  const handleChange = (e) => {
    setTitle(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTodoItem(title)
      console.log(title);
      setTitle('');
      message('');
    }
    else {
      setMessage('Please add an item')
    }
  }
  
  return <div>
    <form action="" onSubmit={handleSubmit} >
      <input type="text" value={title} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
    <span>{ message }</span>
  </div>;
};

InputTodo.propTypes = {
  addTodoItem: Proptypes.func.isRequired
}
export default InputTodo;
