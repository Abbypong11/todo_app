import { getAllTodos } from "@/api";
import AddTask from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { todo } from "node:test";


export default async function Home() {
  const tasks = await getAllTodos();
  console.log(todo)
  return (
    <div className="bg-white min-h-screen mx-auto p-4">
      <div className="max-w-4xl mx-auto mt-4">
        <div className="text-center my-5 flex flex-col gap-4">
          <h1 className="text-2xl font-bold">Todo List App</h1>
          <AddTask/>
        </div>
        <TodoList todos={[]} />

      </div>
    </div>


  );
}
