import React from "react";
import "./style.css"

function TodoItem(props){
  return(
    <li className="container-li">
      <span 
      className={`ckeck ${props.completed && "check--completed"}`}
      onClick={props.onComplete}
      >
        ✓
      </span>
        <p 
        className={`task ${props.completed && "task--completed"}`}
        >{props.text}
        </p>
      <span 
      className="completed"
      onClick={props.onDelete}
      >
        X
      </span>
    </li>
  );
}

export { TodoItem } ;