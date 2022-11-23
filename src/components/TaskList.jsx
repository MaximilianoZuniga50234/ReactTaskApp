import TaskCard from "./TaskCard";
import { TaskContext } from "../context/taskContext";
import { useContext } from "react";

function TaskList() {
  const { tareas } = useContext(TaskContext);

  if (tareas.length === 0) {
    return <h1 className="text-4xl font-bold text-white text-center">No hay tareas</h1>;
  }

  return (
    <div className="grid grid-cols-4 gap-2 ">
      {tareas.map((tarea) => (
        <TaskCard key={tarea.id} tarea={tarea} />
      ))}
    </div>
  );
}

export default TaskList;
