import React, { useState, useRef } from 'react';
import TodoList from './TodoList';

function App() {
  const [todos, setTodos] = useState([
    {id: 1, name:'To Do 1', isCompleted:false }, 
    {id: 2, name:'To Do 2', isCompleted:true }
  ]);

  const todoNameRef = useRef();

  function toggleIsCompleted(todoid) {
    const newTodos = [...todos];
    const fndtodo= newTodos.find(fnd => fnd.id == todoid);
    fndtodo.isCompleted = !fndtodo.isCompleted;
    setTodos(newTodos);
  }

  function handleTodoAdd() {
    if (todoNameRef.current.value != '') {
      const newTodo = {
        id: todos.length, 
        name: todoNameRef.current.value,
        isCompleted: false
      };
      setTodos([...todos, newTodo]);
    }
    todoNameRef.current.value = ''
  }

  return (
    <>
      <TodoList todos={todos} toggleIsCompleted={toggleIsCompleted} />
      <input type="text" ref={todoNameRef} /> <br/>
      <button onClick={handleTodoAdd}>Add ToDo</button>
      <button>Clear Completed</button>
      <div>{todos.filter(todo => todo.isCompleted===false).length} left to do</div>
    </>
  );
}

export default App;
