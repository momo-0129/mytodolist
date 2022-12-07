import React  from "react";
import CompleteTodo from './CompleteTodo'

export default function CompleteTodoList({ todos, toggleTodo }){
  
    return (
      todos.filter(todo => todo.complete)
      .map(todo => {
        console.log(todo);
        return <CompleteTodo key={todo.id} 
                              toggleTodo={toggleTodo}
                              todo={todo} />
      })
    )
}