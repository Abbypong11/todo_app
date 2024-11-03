

const TodoList = () => {
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
      {/* row 1 */}
      <tr>
        <td>Take a walk</td>
        <td><button className="bg-blue-500">Edit</button></td>
      </tr>
    </tbody>
  </table>
</div>
  )
}

export default TodoList