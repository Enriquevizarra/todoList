import React from "react";
import { TodoContext } from "../todoContext";
import "./style.css"

function TodoForm(){
  const [
          newTodoValue, 
          setNewTodoValue,
        ] = React.useState("")
  const {
    addTodo,
    setOpenModal,
  } = React.useContext(TodoContext)
  const onCancel = () =>{
    setOpenModal(false);
  }
  const onChange = (event) =>{
    setNewTodoValue(event.target.value)
  }
  const onSubmit = (event) =>{
    event.preventDefault();
    addTodo(newTodoValue)
    setOpenModal(false)
  }

  return (
    <form
      className="container-form"
      onSubmit={onSubmit}
      >
      <label
        className="label--title"
      >Write a New TODO
      </label>
      <div
        className="container-textTarea"
      >
        <textarea
        className="textTarea--todo"
        value={newTodoValue}
        onChange={onChange}
        placeholder="Type here..."
        />
      </div>
        <div
          className="container--btns"
        >
          <button
            className="btn btn--cancel"
            type="button"
            onClick={onCancel}
            >
            Cancel
          </button>
          <button
            className="btn btn--add"
            type="submit"
          >
            Add
          </button>
        </div>
    </form>
  )
}
export { TodoForm };