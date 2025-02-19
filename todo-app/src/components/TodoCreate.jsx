import { useContext, useState } from "react";
import { TodoContext } from "../contexts/TodoContext";

export default function TodoCreate() {
  const [todoText, setTodoText] = useState("");
  const { dispatch } = useContext(TodoContext);

  function handleTodoAdd() {
    if (todoText.trim() !== "") {
      dispatch({ type: "ADD_TODO", payload: todoText });
      setTodoText("");
    }
  }
  return (
    <>
      <div className="todo-create">
        <input
          type="text"
          placeholder="Todo giriniz"
          className="todo-input"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
        <button className="todo-add-btn" onClick={handleTodoAdd}>
          +
        </button>
      </div>
    </>
  );
}
