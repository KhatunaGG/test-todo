"use client";
import { createContext, Dispatch, SetStateAction, useState } from "react";

type TodoType = {
  text: string;
  completed: boolean;
  id: number;
};

export type ContextType = {
  getButtons: () => void;
  showBtns: boolean;
  setNewTodo: Dispatch<SetStateAction<string>>;
  newTodo: string;
  createTodos: (e: React.FormEvent<HTMLFormElement>) => void;
  todos: TodoType[];
  setShowTodo: Dispatch<SetStateAction<boolean>>;
  showTodo: boolean;
  toggleButtons: (color: string) => void;
  setActiveButton: Dispatch<SetStateAction<string>>;
  activeButton: string;
  setShowBtns: Dispatch<SetStateAction<boolean>>;
};

export const GlobalContext = createContext<ContextType | null>(null);

function ContextProvider({ children }: { children: React.ReactNode }) {
  const [showTodo, setShowTodo] = useState(false);
  const [showBtns, setShowBtns] = useState(false);
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [activeButton, setActiveButton] = useState("");


  const createTodos = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const lastId = todos[todos.length - 1]?.id || 1;
    const todo = {
      text: newTodo,
      completed: false,
      id: lastId + 1,
    };
    setTodos((prev) => [...prev, todo]);
    setNewTodo("");
  };

  const getButtons = () => {
    if (showBtns === false) {
      setShowBtns(true);
    } else {
      setShowBtns(false);
    }
  };

  const toggleButtons = (color: string) => {
    if (activeButton === color) {
      setActiveButton("");
      setShowTodo(false);
    } else {
      setActiveButton(color);
      setShowTodo(true);
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        getButtons,
        showBtns,
        setNewTodo,
        newTodo,
        createTodos,
        todos,
        setShowTodo,
        showTodo,
        toggleButtons,
        setActiveButton,
        activeButton,
        setShowBtns,
      }}
    >
      <div>{children}</div>
    </GlobalContext.Provider>
  );
}

export default ContextProvider;
