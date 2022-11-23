import React from "react";
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
      {/* <TodoCounter /> */}
      <h2>Has completado 2 de 3 TODOS</h2>
      {/* <TodoSearch /> */}
        <input placeholder='Cebolla'/>
      {/* <TodoList> */}
        {/* {todos.map(todo => (
          <TodoItem/>
        ))} */}
      {/* </TodoList> */}
      {/* <CreateTodoButton /> */}
      <button>+</button>
    </React.Fragment>
  );
}

export default App;
