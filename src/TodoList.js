import React  from "react";
import Todo from './Todo'

export default function TodoList({ todos, toggleTodo }){
  
    return (
      todos.filter(todo => todo.complete === false)
      .map(todo => {
        return <Todo 
        key={todo.id} 
        toggleTodo={toggleTodo} 
        todo={todo} />
      })
    )
}