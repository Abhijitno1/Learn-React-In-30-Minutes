import React from "react";
import Todo from "./Todo";

export default function TodoList({todos}) {
    return (
        //todos.length
        todos.map(todo => { return <Todo todoobj= {todo} /> })
    );
}