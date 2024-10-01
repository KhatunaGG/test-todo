"use client";
import { GlobalContext } from "@/app/context/ContextProvider";
import ColoredBtn from "../ColoredBtn/ColoredBtn";
import { useContext } from "react";

function ButtonsSection() {
  const context = useContext(GlobalContext);
  if (!context) return null;
  const { showBtns, setShowTodo, toggleButtons, setActiveButton, setShowBtns } = context;

  const colors = [ "blue", "green", "yellow", "purple"];

  return (
    <div className="flex flex-col">
      {showBtns &&
        colors.map((color, index) => (
          <ColoredBtn
            key={index}
            color={color}
            setShowTodo={setShowTodo}
            toggleButtons={toggleButtons}
            setActiveButton={setActiveButton}
            setShowBtns={setShowBtns}
        
          />
        ))}
    </div>
  );
}

export default ButtonsSection;
