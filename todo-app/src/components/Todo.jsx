import { useContext, useState } from "react";
import { TodoContext } from "../contexts/TodoContext";
export default function Todo({ todo }) {
  const { dispatch } = useContext(TodoContext);
  const [editable, setEditable] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  function handleTodoDelete() {
    dispatch({ type: "DELETE_TODO", payload: todo.id });
  }

  function handleTodoUpdate() {
    dispatch({ type: "UPDATE_TODO", payload: { id: todo.id, text: newText } });
    setEditable(false);
  }

  return (
    <>
      <div className="todo">
        <input
          type="text"
          className="todo-text"
          value={newText}
          readOnly={!editable}
          onChange={(e) => setNewText(e.target.value)}
        ></input>
        <div className="btn-area">
          <button className="delete-btn" onClick={handleTodoDelete}>
            sil
          </button>
          <button
            className="edit-btn"
            onClick={() => (editable ? handleTodoUpdate() : setEditable(true))}
          >
            {editable ? "kaydet" : "düzenle"}
          </button>
        </div>
      </div>
    </>
  );
}
