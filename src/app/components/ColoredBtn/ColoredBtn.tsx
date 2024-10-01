"use client";
import { ColoredBtnPropsType  } from "@/app/interfaces/interface";


const ColoredBtn = ({
  color,
  setShowBtns,
  setTodoContainer,
  todoContainer,
}: ColoredBtnPropsType) => {


  const handleClick = (color: string) => {
    const lastId = todoContainer[todoContainer.length - 1]?.id || 0;
    const newField = {
      color: color,
      id: lastId + 1,
    };
    setTodoContainer((prev) => [...prev, newField]);
    setShowBtns(false);
  };

  return (
    <button
      onClick={() => {
        handleClick(color);
      }}
      style={{ backgroundColor: color }}
      className="w-[50px] h-[50px] rounded-full border border-sky-100"
    ></button>
  );
};

export default ColoredBtn;
