import React from "react";
import "./style.css"

function TodoList(props){
  return(
    <section className="container-list">
      <ul className="container-ul">
        {props.children}
      </ul>
    </section>
  );
}

export { TodoList };