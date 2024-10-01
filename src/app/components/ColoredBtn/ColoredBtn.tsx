import React, { Dispatch, SetStateAction } from "react";

type ColoredBtnPropsType = {
  color: string;
  setShowTodo: Dispatch<SetStateAction<boolean>>;
  toggleButtons: (color: string) => void;
  setActiveButton: Dispatch<SetStateAction<string>>;
  setShowBtns: Dispatch<SetStateAction<boolean>>;
  activeButton: string
};

const ColoredBtn = ({
  color,
  toggleButtons,
  setActiveButton,
  setShowBtns,
  activeButton,
  setShowTodo
}: ColoredBtnPropsType) => {

    const isActive = activeButton === color;
  return (
    <button
      //   onClick={toggleButtons}
      onClick={() => {
        toggleButtons(color);
        setActiveButton(color);
        setShowBtns(false)
        setShowTodo(true)
      }}
      style={{ backgroundColor: color }}
      className="w-10 h-10 rounded-full border border-sky-100"
    ></button>
  );
};

export default ColoredBtn;
