import React from "react";
import { TodoContext } from "../todoContext";
import "./style.css"

function TodoCounter(){
  const { totalTodos, completedTodos } = React.useContext(TodoContext)
  return(
    <h2 
    className="todoCounter"
    >
      Has completado {completedTodos} de {totalTodos} TODOS
    </h2>
  );
}

export { TodoCounter };

