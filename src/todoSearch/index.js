import React from "react";
import { TodoContext } from "../todoContext";
import "./style.css"


function TodoSearch(){
  const { searchValue, setSearchValue } = React.useContext(TodoContext)
  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  }
  return(
    <div 
    className="container-input"
    >
      <input 
      placeholder="type here" 
      className="inputTodoList"
      value={searchValue}
      onChange={onSearchValueChange}
      />
    </div>
  );
}

export {TodoSearch};