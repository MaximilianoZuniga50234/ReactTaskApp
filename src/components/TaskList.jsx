import TaskCard from "./TaskCard";
import { TaskContext } from "../context/taskContext";
import { useContext } from "react";

function TaskList() {
  const { tareas } = useContext(TaskContext);

  if (tareas.length === 0) {
    return <h1>No hay tareas</h1>;
  }

  return (
    <div>
      {tareas.map((tarea) => (
        <TaskCard key={tarea.id} tarea={tarea} />
      ))}
    </div>
  );
}

export default TaskList;
