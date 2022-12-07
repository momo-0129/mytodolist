import React from "react";

export default function CompleteTodo({todo}){  
    return (
      <div>
        <label>
        { todo.name }
        </label>
      </div>
    )
}