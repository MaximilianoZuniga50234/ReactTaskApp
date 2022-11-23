import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

export const App = () => {
  return (
    <main className="bg-zinc-500 h-screen">
      <div className="container mx-auto p-10">
        <TaskForm />
        <TaskList />
      </div>
    </main>
  );
};
