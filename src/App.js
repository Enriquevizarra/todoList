import React from "react";
import { TodoCounter} from "./todocounter";
import { TodoSearch } from "./todosearch";
import { TodoList } from "./todolist";
import { TodoItem } from "./todoitem";
import { CreateTodoButton } from "./todocreatebutton";


// import './App.css';

const todos = [
  {
    text: "Cortar cebolla",
    completed: false 
  },
  {
    text: "asdasdasd",
    completed: false 
  },
  {
    text: "assssssssssdasdasd",
    completed: false 
  },
]

function App() {
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
      {todos.map(todo => (
        <TodoItem key={todo.tetx} text={todo.text}/>
      ))}
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
