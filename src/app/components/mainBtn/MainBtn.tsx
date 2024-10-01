"use client";
import { GlobalContext } from "@/app/context/ContextProvider";
import { useContext } from "react";

const MainBtn = () => {
  const context = useContext(GlobalContext);
  if (!context) return;
  const { getButtons, showBtns, setShowTodo } = context;

  return (
    <>
      <button
        // onClick={getButtons}
        onClick={() => {
            getButtons()
            setShowTodo(false)
        }}
        className="w-10 h-10 rounded-full bg-black absolute bottom-10 right-10"
      ></button>
    </>
  );
};

export default MainBtn;
