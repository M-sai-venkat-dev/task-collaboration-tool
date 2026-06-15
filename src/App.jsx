import { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskCard from "./components/TaskCard";
import Stats from "./components/Stats";

function App() {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const saved =
      JSON.parse(
        localStorage.getItem("tasks")
      ) || [];

    setTasks(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "tasks",
      JSON.stringify(tasks)
    );
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              completed:
                !task.completed,
            }
          : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(
      tasks.filter(
        (task) => task.id !== id
      )
    );
  };

  const filteredTasks =
    tasks.filter((task) =>
      task.title
        .toLowerCase()
        .includes(
          search.toLowerCase()
        )
    );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-bold text-center mb-8">
          Task Collaboration Tool
        </h1>

        <Stats tasks={tasks} />

        <TaskForm addTask={addTask} />

        <input
          type="text"
          placeholder="Search Tasks..."
          className="w-full p-3 rounded border mb-6"
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

        <div className="grid md:grid-cols-2 gap-5">
          {filteredTasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              toggleTask={
                toggleTask
              }
              deleteTask={
                deleteTask
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;