import React, { useEffect, useRef, useState } from "react";
import { TodoItem } from "./List";
import { MdEdit } from "react-icons/md";
import { MdOutlineCancel } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";

export const ListItem = ({
  todo,
  onDelete,
  onEdit,
  onToggleTodo,
}: {  
  todo: TodoItem;
  onDelete: () => void;
  onEdit: (newTodo:string) => void;
  onToggleTodo: () => void;
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [currentInput, setCurrentInput] = useState(todo.desc);
  const editInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isEditing && editInputRef.current){
      editInputRef.current.focus();
    }
  }, [isEditing]); 

  return (
    <div className="flex items-center justify-between bg-gray-100 p-2 rounded-lg mb-2 gap-2">
      <div>
        {isEditing ?
        (<div className="flex items-center">
          <input
            aria-checked={todo.completed}
            aria-label="Toggle todo completed"
            className="mr-2"
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggleTodo()}
          />
          <input
            aria-label="Edit todo"
            type="text" 
            className="p-2 rounded-lg bg-white mr-2"
            onChange={(e) => setCurrentInput(e.target.value)}
            value={currentInput}
            onKeyDown={(e) => {
              if (e.key === "Enter" && currentInput) {
                onEdit(currentInput);
                setIsEditing(false);
              }
            }}
            ref={editInputRef}
          />
          <button
            aria-label="Save todo button"
            onClick={() => {onEdit(currentInput); setIsEditing(false);}}
            className="flex items-center justify-center bg-green-500 text-white w-10 h-10 rounded-full mr-2 hover:cursor-pointer">
            <FaPlus size={22} />
          </button>
        </div>) :
        (<><input
          aria-checked={todo.completed}
          aria-label="Toggle todo completed"
          className="mr-2"
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggleTodo()}
        />
        <span className={todo.completed ? "line-through": ""}>{todo.desc}</span></>)
      }
      </div>
      <div className="flex items-center">
        <button
          aria-label="Delete todo button"
          onClick={() => onDelete()}
          className="flex items-center justify-center bg-red-500 text-white w-10 h-10 rounded-full mr-2 hover:cursor-pointer">
          <MdDelete size={22} />
        </button>
        <button
          aria-label="Toggle edit todo button"
          onClick={() => setIsEditing(!isEditing)}
          className={`flex items-center justify-center ${isEditing ? 'bg-gray-500' :'bg-green-500'} text-white w-10 h-10 rounded-full hover:cursor-pointer`}>
          {isEditing ? <MdOutlineCancel size={28} /> : <MdEdit size={28} />}
        </button>
      </div>
    </div>
  )
}