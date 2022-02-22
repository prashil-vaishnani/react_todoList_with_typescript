import React, { useState, useEffect } from "react";
import Todo from "./todo";
import DateTime from "./date";
import TodoForm from "./todoform";
interface todos {
  isComplete: boolean;
  id: number;
  text: string;
}

function TodoList() {
  let initTodo: todos[];
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos") || "{}");
  }

  const [todos, setTodos] = useState<todos[]>(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo: todos) => {
    const newTodos = [...todos, todo];
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const removeTodo = (id: number) => {
    const removedArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(removedArr);
  };

  const completeTodo = (id: number) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <>
      <h3>
        <DateTime />
      </h3>
      <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} />
      <TodoForm onSubmit={addTodo} />
    </>
  );
}

export default TodoList;
