import { useContext } from "react";
import { TaskContext } from "../context/taskContext";

function TaskCard({ tarea }) {
  const { deleteTask } = useContext(TaskContext);

  return (
    <div className="bg-gray-900 text-white p-4 rounded-md">
      <h1 className="text-xl font-bold capitalize">{tarea.title}</h1>
      <p className="text-gray text-sm">{tarea.description}</p>
      <button className="bg-red-500 rounded-md px-2 py-1 mt-4 hover:bg-red-400" onClick={() => deleteTask(tarea.id)}>Eliminar</button>
    </div>
  );
}

export default TaskCard;