import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

export const App = () => {
  return (
    <div>
      <TaskForm />
      <TaskList />
    </div>
  );
};
