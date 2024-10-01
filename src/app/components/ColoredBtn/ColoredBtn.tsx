"use client";
import { todoContainerType } from "@/app/interfaces/interface";
import React, { Dispatch, SetStateAction } from "react";
type ColoredBtnPropsType = {
  color: string;
  setShowTodo: Dispatch<SetStateAction<boolean>>;
  setActiveButton: Dispatch<SetStateAction<string>>;
  setShowBtns: Dispatch<SetStateAction<boolean>>;
  setTodoContainer: Dispatch<SetStateAction<todoContainerType[]>>;
  todoContainer: todoContainerType[];
};

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
