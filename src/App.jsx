import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { useState, useEffect } from "react";
import { tareas as tasks } from "./data/tasks";

export const App = () => {
  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    setTareas(tasks);
  }, []);

  function createTask(titleTask, descriptionTask) {
    setTareas([
      ...tareas,
      {
        title: titleTask,
        id: tareas.length,
        description: descriptionTask,
      },
    ]);
  }

  return (
    <div>
      <TaskForm createTask={createTask} />
      <TaskList tareas={tareas} />
    </div>
  );
};
