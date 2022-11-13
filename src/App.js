import React, { useState } from 'react';
import TodoList from './TodoList';

function App() {
  const [todos, setTodos] = useState([
    {id: 1, name:'To Do 1', isCompleted:false }, 
    {id: 2, name:'To Do 2', isCompleted:true }
  ]);

  return (
    <>
      <TodoList todos={todos} />
      <input type="text" /> <br/>
      <button>Add ToDo</button>
      <button>Clear Completed</button>
      <div>0 left to do</div>
    </>
  );
}

export default App;
