import React, { useReducer, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import "./App.css";

const todoReducer = (todos, action) => {
  switch (action.type) {
    case "ADD-TODO":
      return [
        ...todos,
        { id: uuidv4(), text: action.payload, completed: false },
      ];
    case "DELETE-TODO":
      return todos.filter((item) => item.id !== action.payload);
    case "EDIT-TODO":
      return todos.map((item) =>
        item.id === action.payload.id
          ? { ...item, text: action.payload.text }
          : item
      );
    case "TOGGLE_TODO":
      return todos.map((item) =>
        item.id === action.payload
          ? { ...item, completed: !item.completed }
          : item
      );

    default:
      break;
  }
};

// creating todo with the help of useReducer
function App() {
  const [todos, dispatch] = useReducer(todoReducer, [], () => {
    const localValue = JSON.parse(localStorage.getItem("TODOS"));
    return localValue ? localValue : [];
  });
  const [newTodo, setNewTodo] = useState("");
  const [isEditing, setIsEditing] = useState(null);

  // submit todo
  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEditing) {
      dispatch({
        type: "EDIT-TODO",
        payload: { id: isEditing.id, text: newTodo },
      });
      setIsEditing(null);
    } else {
      handleAdd();
    }
    setNewTodo("");
  };

  // render todo in localStorage 
  useEffect(() => {
    localStorage.setItem("TODOS", JSON.stringify(todos));
  }, [todos]);
  
  // Adding new todo
  const handleAdd = () => {
    dispatch({ type: "ADD-TODO", payload: newTodo });
    setNewTodo("");
  };

  // deleting todo
  const handleDelete = (id) => {
    dispatch({ type: "DELETE-TODO", payload: id });
  };

  // edit todo
  const handleEdit = (item) => {
    setNewTodo(item.text);
    setIsEditing(item);
  };
  
  // Toggle todo
  const handleToggle = (id) => {
    dispatch({ type: "TOGGLE_TODO", payload: id});
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="max-w-lg w-full mt-10 mx-auto">
        <div className="flex items-center gap-4">
          <input
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            className="py-3 px-5 w-full text-black outline-none rounded-md "
            type="text"
            placeholder="Enter your Todo ..."
          />
          <span
            onClick={handleAdd}
            className="py-3 px-5 cursor-pointer text-semibold rounded-md bg-blue-500"
          >
            Add
          </span>
        </div>

        <ul className="flex flex-col gap-4 mt-5">
          {todos.length <= 0 && (
            <div className="text-red-200 font-medium text-xl text-center">
              THERE IS NO TODO HERE ...
            </div>
          )}
          {todos.map((item) => (
            <li
              key={item.id}
              className="flex items-center hover:bg-black haover:bg-opacity-50 p-3 rounded-md transition-all justify-between"
            >
              <div className="flex items-center gap-3">
                <input 
                checked={item.completed}
                onChange={() => handleToggle(item.id)}
                className="w-5 h-5" 
                type="checkbox" />
                <span className={`${item.completed ? "line-through" : ""}`}>{item.text}</span>
              </div>
              <div className="flex items-center gap-3">
                <span
                  onClick={() => handleEdit(item)}
                  className="w-6 h-6 flex cursor-pointer items-center justify-center bg-blue-200 rounded-full text-blue-500"
                >
                  <AiFillEdit></AiFillEdit>
                </span>
                <span
                  onClick={() => handleDelete(item.id)}
                  className="w-6 h-6 flex cursor-pointer items-center justify-center bg-red-200 rounded-full text-red-500"
                >
                  <AiFillDelete></AiFillDelete>
                </span>
              </div>
            </li>
          ))}
        </ul>
      </form>
    </>
  );
}

export default App;
