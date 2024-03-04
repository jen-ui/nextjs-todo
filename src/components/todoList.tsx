interface todoListI {
  todoList: string[];
  setTodoList(todoList: string[]): void;
}

const TodoList = ({ todoList, setTodoList }: todoListI) => {
  const onCross = (i: number) => {
    const temp = todoList[i];
    todoList[i] = todoList[-1];
    todoList[-1] = temp;
    todoList.pop();
    setTodoList([...todoList]);
  };

  return (
    <div className=" flex flex-col mx-auto justify-center items-center w-1/2 ">
      <div className="flex flex-col w-3/4 border border-gray-900 bg-gray-300 text-gray-900 text-xl rounded-md p-4">
        <h2 className="font-semibold text-2xl text-red-700">
          {todoList.length > 0 ? "Your TODOS" : "Your Todos is empty"}
        </h2>
        <span className="h-px w-full bg-gray-900" />

        {todoList.map((item, i) => (
          <div
            key={i}
            className="border border-white shadow-md rounded-sm mt-2 px-2 flex  items-center justify-between"
          >
            <li>{item}</li>
            <button
              onClick={() => {
                onCross(i);
              }}
              className="h-5 w-5 pb-2 rounded-md shadow-lg bg-red-600 flex justify-center items-center"
            >
              x
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
