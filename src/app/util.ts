'use client'
import { TodoItem } from "./List";

export const setData = (value: TodoItem[]) => {
  const todoObject = { todoList: value };
  const todoString = JSON.stringify(todoObject);
  if (window) {
    window.localStorage.setItem("todo-list", todoString);
  }
}

export const getData = () => {
  if (window && window.localStorage) {
    const todos = window.localStorage.getItem("todo-list");
    return todos ? JSON.parse(todos).todoList : [];
  }
  return [] as TodoItem[];
}