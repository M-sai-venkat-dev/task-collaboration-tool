import { useState } from "react";

function TaskForm({ addTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] =
    useState("");
  const [assignedTo, setAssignedTo] =
    useState("");
  const [priority, setPriority] =
    useState("Medium");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !assignedTo) {
      alert("Fill required fields");
      return;
    }

    addTask({
      id: Date.now(),
      title,
      description,
      assignedTo,
      priority,
      completed: false,
    });

    setTitle("");
    setDescription("");
    setAssignedTo("");
    setPriority("Medium");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow rounded-xl p-6 mb-6"
    >
      <h2 className="text-xl font-bold mb-4">
        Create Task
      </h2>

      <input
        className="w-full border p-3 rounded mb-3"
        placeholder="Task Title"
        value={title}
        onChange={(e) =>
          setTitle(e.target.value)
        }
      />

      <textarea
        className="w-full border p-3 rounded mb-3"
        placeholder="Description"
        value={description}
        onChange={(e) =>
          setDescription(e.target.value)
        }
      />

      <input
        className="w-full border p-3 rounded mb-3"
        placeholder="Assigned To"
        value={assignedTo}
        onChange={(e) =>
          setAssignedTo(e.target.value)
        }
      />

      <select
        className="w-full border p-3 rounded mb-3"
        value={priority}
        onChange={(e) =>
          setPriority(e.target.value)
        }
      >
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>

      <button
        className="bg-blue-600 text-white px-5 py-2 rounded"
        type="submit"
      >
        Add Task
      </button>
    </form>
  );
}

export default TaskForm;