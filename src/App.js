import React from "react";
import { TodoCounter} from "./todocounter";
import { TodoSearch } from "./todosearch";
import { TodoList } from "./todolist";
import { TodoItem } from "./todoitem";


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
        <TodoItem text={todo.text}/>
      ))}
      </TodoList>
      {/* <CreateTodoButton /> */}
      <button>+</button>
    </React.Fragment>
  );
}

export default App;
