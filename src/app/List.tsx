'use client'
import React from "react";
import { ListItem } from "./ListItem";

export type TodoItem = {
  desc: string;
  completed: boolean;
}

export default function List() {
  const [todos, setTodos] = React.useState<TodoItem[]>([]);
  const [currentInput, setCurrentInput] = React.useState<string>("");

  const addTodo = (todo: string) => {
    setTodos((prevTodos) => [...prevTodos, { desc: todo, completed: false }]);
    setCurrentInput("");
  };

  const deleteTodo = (index: number) => {
    setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index));
  }

  const editTodo = (index: number, newTodo: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo, i) => (i === index ? {desc: newTodo, completed: todo.completed} : todo))
    );
  };

  const toggleTodo = (index: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo, i) => (i === index ? { ...todo, completed: !todo.completed } : todo))
    );
  };

  return (
    <>
    <h3 className="mb-4 text-gray-500">Number of tasks: {todos.length}</h3>
    <div className="flex justify-between items-center mb-4 gap-2">
      <input 
        type="text"
        placeholder="Add a new todo"
        className="border p-2 rounded-lg w-full"
        value={currentInput}
        onKeyDown={(e) => {
          if (e.key === "Enter" && currentInput) {
            addTodo(currentInput);
          }
        }}
        onChange={(e) => setCurrentInput(e.target.value)}
      />
      <button 
        disabled={!currentInput}
        onClick={() => addTodo(currentInput)}
        className="bg-blue-500 text-white w-10 h-10 rounded-full hover:cursor-pointer">
          +
      </button>
    </div>
    <div>
      {
        todos.map((todo, index) => (
          <div key={index}>
            <ListItem
              todo={todo}
              onDelete={()=>deleteTodo(index)}
              onEdit={(newTodo:string)=>editTodo(index, newTodo)}
              onToggleTodo={()=>toggleTodo(index)} />
          </div>
        ))
      }
    </div>
    </>
  );
}
