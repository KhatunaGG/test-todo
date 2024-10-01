"use client";
import { createContext,  useState } from "react";
import { ContextType, todoContainerType  } from "../interfaces/interface";


export const GlobalContext = createContext<ContextType | null>(null);

function ContextProvider({ children }: { children: React.ReactNode }) {
  const [showTodo, setShowTodo] = useState(false);
  const [showBtns, setShowBtns] = useState(false);
  const [newTodo, setNewTodo] = useState("");
  const [activeButton, setActiveButton] = useState("");
  const [todoContainer, setTodoContainer] = useState<todoContainerType[]>([]);


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>, id: number) => {
    e.preventDefault();
    const newItem = {
      text: newTodo,
      id: Math.random().toString(36).substr(2, 9),
      completed: false,
    };

    setTodoContainer((prev) =>
      prev.map((el) =>
        el.id === id ? { ...el, todo: newItem } : el
      )
    );
    setNewTodo("")
  };

  const getButtons = () => {
    setShowBtns(!showBtns);
  };

  return (
    <GlobalContext.Provider
      value={{
        getButtons,
        showBtns,
        setNewTodo,
        newTodo,
        setShowTodo,
        showTodo,
        setActiveButton,
        activeButton,
        setShowBtns,
        setTodoContainer,
        todoContainer,
        handleSubmit,
      }}
    >
      <div>{children}</div>
    </GlobalContext.Provider>
  );
}

export default ContextProvider;
