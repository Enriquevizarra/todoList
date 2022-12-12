import React from "react";
import "./style.css"
function CreateTodoButton(props){
  const onClickButton = () => {
    props.setOpenModal(prevState => !prevState)
  }

  return(
    <div className="container-btn">
      <button 
        className="btn-newTask"
        onClick={onClickButton}
      >
          +
        </button>
    </div>
  );
}

export {CreateTodoButton};