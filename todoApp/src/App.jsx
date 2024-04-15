import React, { useEffect, useState } from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { RiEditBoxLine } from "react-icons/ri";
const App = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  function saveLocalTodos(todo) {
    let todos;
    if (localStorage.getItem("todos") === null) {
      todos = [];
    } else {
      todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  function removeLocalTodos(todo, index) {
    let todos;
    if (localStorage.getItem("todos") === null) {
      todos = [];
    } else {
      todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo === "") return;
    console.log(todo);
    setTodos([...todos, todo]);
    saveLocalTodos(todo);
    console.log(todos);
    setTodo("");
  };

  const handleDelete = (index) => {
    console.log(todos[index]);
    const afterDelete = [...todos];
    afterDelete.splice(index, 1);
    setTodos(afterDelete);
    removeLocalTodos(todo, index);
  };
  const handleEdit = (index) => {
    setTodo(todos[index]);
    const updateTodo = [...todos];
    updateTodo.splice(index, 1);
    setTodos(updateTodo);
    removeLocalTodos(todo, index);
  };
  return (
    <div className="w-[90vw] mt-32 mx-auto">
      <div className="h-12 w-full">
        <form onSubmit={handleSubmit} className="h-full w-full">
          <input
            type="text"
            className="h-full w-4/6 bg-indigo-300 rounded-tl-lg outline-indigo-700"
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
          />
          <button
            className="h-full w-2/6 bg-indigo-600 rounded-tr-lg"
            type="submit"
          >
            submit
          </button>
        </form>
      </div>
      {todos.length === 0 && (
        <div className="bg-indigo-200 h-auto w-full py-10 flex justify-center items-center rounded-b-xl">
          <p className="text-3xl font-bold w-[80%]">
            Add todos to get the journey started
          </p>
        </div>
      )}
      <ul className="bg-indigo-500 flex flex-col justify-center items-start w-full rounded-b-lg">
        {todos.map((todo, index) => {
          return (
            <li
              key={index}
              className={`bg-indigo-200 p-2 h-auto w-full hover:bg-indigo-500 flex justify-start items-center relative ${
                index === todos.length - 1 ? "rounded-b-lg" : ""
              }`}
            >
              <div className=" w-[80%]">
                <p className=" overflow-wrap break-words">{todo}</p>
              </div>

              <div className="absolute right-3 h-full">
                <button
                  className="h-full cursor-pointer sm:mr-3"
                  onClick={() => handleEdit(index)}
                >
                  <RiEditBoxLine size={25} color="blue" />
                </button>
                <button
                  className="h-full cursor-pointer "
                  onClick={() => handleDelete(index)}
                >
                  <RiDeleteBin6Fill size={25} color="red" />
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default App;
