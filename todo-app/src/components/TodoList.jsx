import { useContext } from "react";
import Todo from "./Todo";
import { TodoContext } from "../contexts/TodoContext";
export default function TodoList() {
  const { todos } = useContext(TodoContext);
  return (
    <>
      <div className="todo-list">
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </div>
    </>
  );
}
