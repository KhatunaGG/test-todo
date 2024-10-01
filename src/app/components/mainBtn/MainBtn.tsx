"use client";
import { GlobalContext } from "@/app/context/ContextProvider";
import { useContext } from "react";

const MainBtn = () => {
  const context = useContext(GlobalContext);
  if (!context) return;
  const { getButtons, setShowTodo } = context;

  return (
    <>
      <button
        onClick={() => {
          getButtons();
          setShowTodo(false);
        }}
        className="w-[50px] h-[50px] rounded-full bg-black absolute bottom-[12vh] right-10"
      ></button>
    </>
  );
};

export default MainBtn;
