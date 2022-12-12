import React from "react";
import { TodoCounter} from "../todoCounter/index.js";
import { TodoSearch } from "../todoSearch/index.js";
import { TodoList } from "../todoList/index.js";
import { TodoItem } from "../todoItem/index.js";
import { CreateTodoButton } from "../todoCreateButton/index.js";
import { TodoContext } from "../todoContext/index.js";
import { Modal } from "../modal/index.js";
import { TodoForm } from "../todoForm/index.js";
import { TodosLoading } from "../todosLoading/index.js";
import { EmptyTodos } from "../emptyTodos/index.js";
import { TodoError } from "../todoError/index.js";



function AppUI(){
  const { error,
          loading,
          searchedTodos,
          completeTodo,
          deleteTodo,
          openModal,
          setOpenModal,
  } = React.useContext(TodoContext)
  return(
    <React.Fragment>
      <TodoCounter/>
      <TodoSearch/>
              <TodoList>
                {error && <TodoError error={error} />}
                {loading && <TodosLoading />}
                {(!loading && !searchedTodos.length) && <EmptyTodos />}

                {searchedTodos.map(todo => (
                  <TodoItem 
                    key={todo.text} 
                    text={todo.text}
                    completed={todo.completed}
                    onComplete={()=> completeTodo(todo.text)}
                    onDelete={()=> deleteTodo(todo.text)}
                  />
                ))}
              </TodoList>

              {!!openModal && (
                <Modal>
                  <TodoForm />
                </Modal>
              )}

      <CreateTodoButton 
        setOpenModal={setOpenModal}
      />
    </React.Fragment>
  );
}

export { AppUI };