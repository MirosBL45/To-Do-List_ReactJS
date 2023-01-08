import React from 'react';
import { AiOutlineCheckSquare } from 'react-icons/ai';
import { BsTrash } from 'react-icons/bs';

function Todo({ text, todo, todos, setTodos }) {
  function deleteHandler() {
    setTodos(todos.filter((el) => el.id !== todo.id));
  }

  function completeHandler() {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  }

  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed && 'completed'}`}>{text}</li>
      <button onClick={completeHandler} className="complete-btn">
        <AiOutlineCheckSquare size="45px" />
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <BsTrash size="45px" />
      </button>
    </div>
  );
}

export default Todo;
