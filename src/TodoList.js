import React from "react";
import Todo from "./Todo";

export default function TodoList({todos, toggleIsCompleted}) {
    return (
        //todos.length
        todos.map(todo => { return <Todo key={todo.id} todoobj= {todo} toggleIsCompleted= {toggleIsCompleted} /> })
    );
}