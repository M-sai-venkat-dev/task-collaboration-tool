function TaskCard({
    task,
    toggleTask,
    deleteTask,
  }) {
    return (
      <div className="bg-white rounded-xl shadow p-5">
        <div className="flex justify-between">
          <h3 className="text-xl font-bold">
            {task.title}
          </h3>
  
          <span
            className={`px-3 py-1 rounded-full text-sm ${
              task.completed
                ? "bg-green-100 text-green-700"
                : "bg-yellow-100 text-yellow-700"
            }`}
          >
            {task.completed
              ? "Completed"
              : "Pending"}
          </span>
        </div>
  
        <p className="mt-3 text-gray-600">
          {task.description}
        </p>
  
        <p className="mt-2">
          <strong>Assigned To:</strong>{" "}
          {task.assignedTo}
        </p>
  
        <p className="mt-2">
          <strong>Priority:</strong>{" "}
          {task.priority}
        </p>
  
        <div className="flex gap-3 mt-4">
          <button
            onClick={() =>
              toggleTask(task.id)
            }
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            {task.completed
              ? "Undo"
              : "Complete"}
          </button>
  
          <button
            onClick={() =>
              deleteTask(task.id)
            }
            className="bg-red-600 text-white px-4 py-2 rounded"
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
  
  export default TaskCard;