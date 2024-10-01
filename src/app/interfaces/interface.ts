import { Dispatch, SetStateAction } from "react";

export type TodoType = {
  text: string;
  completed: boolean;
  id: string;
};

export type todoContainerType = {
  color: string;
  id: number;
  todo?: TodoType;
};

export type ContextType = {
  getButtons: () => void;
  showBtns: boolean;
  setNewTodo: Dispatch<SetStateAction<string>>;
  newTodo: string;
  setShowTodo: Dispatch<SetStateAction<boolean>>;
  showTodo: boolean;
  setActiveButton: Dispatch<SetStateAction<string>>;
  activeButton: string;
  setShowBtns: Dispatch<SetStateAction<boolean>>;
  setTodoContainer: Dispatch<SetStateAction<todoContainerType[]>>;
  todoContainer: todoContainerType[];
  handleSubmit: (e: React.FormEvent<HTMLFormElement>, id: number) => void;
};
