"use client"
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import TodoForm from "@/components/todoForm";
import TodoList from "@/components/todoList";
import { Console } from "console";
import { todo } from "node:test";
import { useState } from "react";

const Home = () => {

  const [todoList, setTodoList] = useState<string[]>([])
  
  function addToList(task: string) {
    console.log(`in addToList ${task}`)
    setTodoList([...todoList, task])
    return 0;
  }

  // console.log(typeof(addToList))

  return (
    <>
      
      <MaxWidthWrapper>
        <div className=" flex flex-col w-1/2 mx-auto items-center justify-content py-20 text-center">
          <h1 className="font-bold text-xl md:text-3xl text-gray-500">
            Welcome to the{" "}
            <div className="text-2xl md:text-4xl text-red-600">TODO APP</div>
            <div className="md:text-xl font-semibold text-lg">
              Add smaller goals act and them and before you know it you at the
              top.
            </div>
          </h1>
        </div>
      </MaxWidthWrapper>
      <section className="border-t border-gray-500 bg-gray-100"><MaxWidthWrapper className="py-20">
        <TodoForm addToList={addToList} />
        <TodoList todoList={todoList} setTodoList={setTodoList}/>
      </MaxWidthWrapper></section>
      {/* {console.log(todoList)} */}
      
    </>
  );
};

export default Home;
