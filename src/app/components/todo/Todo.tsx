"use client";

import { GlobalContext } from "@/app/context/ContextProvider";
import React, { useContext } from "react";

function Todo() {
  const context = useContext(GlobalContext);
  if (!context) return null;

  const { setNewTodo, newTodo, createTodos, todos, showTodo, activeButton } =
    context;

  return (
    <div>
      {activeButton && showTodo &&  (
        <div className="w-[300px] bg-slate-200 p-4 rounded-md flex flex-col gap-6">
          <div className="w-full flex justify-end gap-4 ">
            <button>X</button>
            <button>?</button>
          </div>
          <form onSubmit={createTodos} className="flex gap-2">
            <input
              onChange={(e) => setNewTodo(e.target.value)}
              type="text"
              className="p-2"
              value={newTodo}
            />
            <button className="px-4 py-2 bg-green-400">add</button>
          </form>
          <div>
            <p></p>
          </div>
        </div>
      ) }
    </div>
  );
}

export default Todo;
