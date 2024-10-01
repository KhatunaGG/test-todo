import ButtonsSection from "./components/ButtonsSection/ButtonsSection";
import MainBtn from "./components/mainBtn/MainBtn";
import Todo from "./components/todo/Todo";

export default function Home() {
  return (
    <div className=" w-[50%]  mx-auto h-screen pt-10">
      <div className="w-fill flex items-center justify-center">
        <Todo />
      </div>
      <MainBtn />

      <div className="absolute bottom-[20vh] right-10 gap-y-4">
        <ButtonsSection />
      </div>
    </div>
  );
}
