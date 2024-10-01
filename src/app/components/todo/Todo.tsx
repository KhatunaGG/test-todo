"use client";
import { GlobalContext } from "@/app/context/ContextProvider";
import React, { useContext } from "react";

function Todo() {
  const context = useContext(GlobalContext);
  if (!context) return null;
  const {
    todoContainer,
    setNewTodo,
    newTodo,
    handleSubmit,
  } = context;

  return (
    <div>
      {todoContainer.map((el, i) => (
        <div
          key={i}
          style={{ backgroundColor: el.color }}
          className={`w-[300px] p-4 rounded-md flex flex-col gap-6 mb-4`}
        >
          <div className="w-full flex justify-end gap-4 ">
            <button>X</button>
            <button>?</button>
          </div>
          <form onSubmit={(e) => handleSubmit(e, el.id)} className="flex gap-2">
            <input
              onChange={(e) => setNewTodo(e.target.value)}
              type="text"
              className="p-2"
              value={el.todo?.text ? el.todo.text : newTodo}
            />
            <button className="px-4 py-2 bg-green-400">add</button>
          </form>
          <div>
            <p>{el.todo?.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Todo;
