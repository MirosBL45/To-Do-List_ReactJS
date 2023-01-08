import React from 'react';
import { BiMessageAdd } from 'react-icons/bi';
function Form({ inputText, setInputText, todos, setTodos, setStatus }) {
  function inputTextHandler(e) {
    setInputText(e.target.value);
  }

  // function hasAnyLetters(str) {
  //   return /^[A-Za-z0-9]+$/.test(str);
  // }

  function submitTodoHandler(e) {
    e.preventDefault();
    if (
      inputText === '' ||
      inputText === ' ' ||
      inputText === '  ' ||
      inputText === '   ' ||
      inputText === '    '
      // !hasAnyLetters(inputText)
    ) {
      alert('Please enter some text');
      return;
    }
    setTodos([
      ...todos,
      {
        text: inputText,
        completed: false,
        id: Math.floor(Math.random() * 10000),
      },
    ]);

    setInputText('');
  }

  function statusHandler(e) {
    setStatus(e.target.value);
  }

  return (
    <form>
      <div className="inputHolder">
        <input
          value={inputText}
          onChange={inputTextHandler}
          type="text"
          className="todo-input"
        />
        <button
          onClick={submitTodoHandler}
          className="todo-button"
          type="submit"
        >
          <BiMessageAdd />
        </button>
      </div>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
}

export default Form;
