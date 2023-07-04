import React, { useState, useRef, useEffect, useReducer } from 'react';
import TodoList from './TodoList';
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = 'TodoApp.todos';
const DEFAULT_TODOS = [
  {id: 1, name:'To Do 1', isCompleted:false }, 
  {id: 2, name:'To Do 2', isCompleted:true }
];

const reducer = function(state, action) {
  switch (action.type) {
    case "TOGGLE":
      return state.map(todo => {
        if (todo.id == action.id)
          return {...todo, isCompleted: !todo.isCompleted};
        else
          return todo;
      });
    case "ADDTODO":
      const newTodo = {
        id: uuidv4(),  
        name: action.todoName,
        isCompleted: false
      };
      //state.push(newTodo);
      return [...state, newTodo];
    case "REMOVETODO":
      const incompleteTodos = state.filter(find => !find.isCompleted);
      return [...incompleteTodos];
    default:
      return state;
  }
}

export default function TodoApp() {
  
  //const [todos, setTodos] = useState(DEFAULT_TODOS);
  const [todos, dispatch] = useReducer(reducer, DEFAULT_TODOS); //https://www.w3schools.com/react/react_usereducer.asp

  const todoNameRef = useRef();

  /*useEffect(() => {
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
*/
  function toggleIsCompletedNew(todoid) {
    dispatch({type: "TOGGLE", id: todoid});
  }

  /*unction handleTodoAdd() {
    if (todoNameRef.current.value != '') {
      const newTodo = {
        id: uuidv4(),  
        name: todoNameRef.current.value,
        isCompleted: false
      };
      //setTodos([...todos, newTodo]);
    }
    todoNameRef.current.value = ''
  }*/

  function handleTodoAddNew() {
    if (todoNameRef.current.value != '') {
      dispatch({ type: "ADDTODO", todoName: todoNameRef.current.value });
    }
    todoNameRef.current.value = ''
  }

  function removeCompleted() {
    dispatch({ type: "REMOVETODO"});
    //const incompleteTodos = todos.filter(find => !find.isCompleted);
    //setTodos(incompleteTodos);
  }

  return (
    <>
      <TodoList todos={todos} toggleIsCompleted={toggleIsCompletedNew} />
      <input type="text" ref={todoNameRef} /> <br/>
      <button onClick={handleTodoAddNew}>Add ToDo</button>
      <button onClick={removeCompleted} >Clear Completed</button>
      <div>{todos.filter(todo => todo.isCompleted===false).length} left to do</div>
    </>
  );
}