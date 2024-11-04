import {ITodo} from "@/types/Todo"
import React from "react";

interface TodoListProps {
  todos: ITodo[];
}

const TodoList: React.FC<TodoListProps> = ({todos}) => {
  return (
    <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Task</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {todos.map((todos) => (
        <tr key={todos.id}>
           <td>{todos.title}</td>
           <td>{todos.des}</td>

        </tr>
      ))}
      <tr>
       
      </tr>
    </tbody>
  </table>
</div>
  )
}

export default TodoList