import React from 'react';
import TodoList from './TodoList';

function App() {
  return (
    <>
      <TodoList />
      <input type="text" /> <br/>
      <button>Add ToDo</button>
      <button>Clear Completed</button>
      <div>0 left to do</div>
    </>
  );
}

export default App;
