import { useState, useEffect } from "react";
import TodoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
      <div className="container">
        <header>
          <h1 className="title">Todo App</h1>
        </header>
        <div className="first-row">
          <TodoCreate />
        </div>
        <div className="second-row">
          <TodoList />
        </div>
      </div>
    </>
  );
}

export default App;
