import React from "react";
import { TodoCounter} from "./todocounter";
import { TodoSearch } from "./todosearch";
import { TodoList } from "./todolist";


// import './App.css';

const todos = [
  {
    text: "Cortar cebolla",
    completed: false 
  },
  {
    text: "Cortar cebolla",
    completed: false 
  },
  {
    text: "Cortar cebolla",
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
        // <TodoItem/>
      ))}
      </TodoList>
      {/* <CreateTodoButton /> */}
      <button>+</button>
    </React.Fragment>
  );
}

export default App;
