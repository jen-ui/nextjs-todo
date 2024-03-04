"use client";

import { useState } from "react";

interface addToListI {
  addToList(item: string): void;
}
interface ItemsI {
  task: string;
}

const TodoForm = ({ addToList }: addToListI) => {
  console.log(typeof addToList);

  const add = () => {};

  // console.log(typeof add);

  const [items, setItems] = useState<ItemsI>({ task: "" });
  return (
    <div className="flex p-5 mt-5 items-center justify-center mx-auto text-center">
      <input
        type="text"
        name="task"
        value={items.task}
        onChange={(e) => {
          const { name, value } = e.target;

          setItems({ [name]: value });
          // console.log(items);
        }}
        className="bg-white h-10 w-1/2 rounded-2xl border border-red-600 pl-3"
      />
      <button
        onClick={() => {
          addToList(items.task);
          setItems({ task: "" });
        }}
        className="bg-green-600 flex justify-center pb-2.5 h-10 w-10 rounded-full ml-4 font-bold text-3xl border border-gray-600"
      >
        +
      </button>
    </div>
  );
};

export default TodoForm;
