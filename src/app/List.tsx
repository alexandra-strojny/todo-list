'use client'
import React, { useEffect, useState } from "react";
import { ListItem } from "./ListItem";
import { getData, setData } from "./util";
import { FaPlus } from "react-icons/fa6";

export type TodoItem = {
  desc: string;
  completed: boolean;
}

export default function List() {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [currentInput, setCurrentInput] = useState<string>("");

  useEffect(() => {
    const todos = getData();
    setTodos(todos);
  }, []);

  const addTodo = (todo: string) => {
    const newTodos = [...todos, { desc: todo, completed: false }];
    setTodos(newTodos);
    setData(newTodos);
    setCurrentInput("");
  };

  const deleteTodo = (index: number) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
    setData(newTodos);
  }

  const editTodo = (index: number, newTodo: string) => {
    const newTodos = todos.map((todo, i) => (i === index ? {desc: newTodo, completed: todo.completed} : todo));
    setTodos(newTodos);
    setData(newTodos);
  };

  const toggleTodo = (index: number) => {
    const newTodos = todos.map((todo, i) => (i === index ? { ...todo, completed: !todo.completed } : todo));
    setTodos(newTodos);
    setData(newTodos);
  };

  return (
    <>
    <h2 
      aria-live="polite"
      className="mb-4 text-gray-500">
        Number of tasks: {todos.length}
    </h2>
    <div className="flex justify-between items-center mb-4 gap-2">
      <input 
        aria-label="Add a new todo"
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
        aria-label="Add todo button"
        disabled={!currentInput}
        onClick={() => addTodo(currentInput)}
        className="flex items-center justify-center bg-blue-500 text-white w-11 h-10 rounded-full hover:cursor-pointer">
        <FaPlus size={22} />
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
