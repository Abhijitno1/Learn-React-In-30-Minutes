import React, { useState, useRef, useEffect } from 'react';
import TodoList from './TodoList';
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = 'TodoApp.todos';
const DEFAULT_TODOS = [
  {id: 1, name:'To Do 1', isCompleted:false }, 
  {id: 2, name:'To Do 2', isCompleted:true }
];

 export default function TodoApp() {
  
  const [todos, setTodos] = useState(DEFAULT_TODOS);

  const todoNameRef = useRef();

  useEffect(() => {
    var storedTodos= JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function toggleIsCompleted(todoid) {
    const newTodos = [...todos];
    const fndtodo= newTodos.find(fnd => fnd.id == todoid);
    fndtodo.isCompleted = !fndtodo.isCompleted;
    setTodos(newTodos);
  }

  function handleTodoAdd() {
    if (todoNameRef.current.value != '') {
      const newTodo = {
        id: uuidv4(),  
        name: todoNameRef.current.value,
        isCompleted: false
      };
      setTodos([...todos, newTodo]);
    }
    todoNameRef.current.value = ''
  }

  function removeCompleted() {
    const incompleteTodos = todos.filter(find => !find.isCompleted);
    setTodos(incompleteTodos);
  }

  return (
    <>
      <TodoList todos={todos} toggleIsCompleted={toggleIsCompleted} />
      <input type="text" ref={todoNameRef} /> <br/>
      <button onClick={handleTodoAdd}>Add ToDo</button>
      <button onClick={removeCompleted} >Clear Completed</button>
      <div>{todos.filter(todo => todo.isCompleted===false).length} left to do</div>
    </>
  );
}