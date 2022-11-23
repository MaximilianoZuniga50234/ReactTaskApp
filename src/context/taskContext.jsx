import { createContext, useState, useEffect } from "react";
import { tareas as tasks } from "../data/tasks";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tareas, setTareas] = useState([]);

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

  const deleteTask = (taskId) => {
    setTareas(tareas.filter((tarea) => tarea.id !== taskId));
  };

  useEffect(() => {
    setTareas(tasks);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tareas,
        deleteTask,
        createTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
