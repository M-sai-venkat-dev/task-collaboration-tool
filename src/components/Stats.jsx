function Stats({ tasks }) {
    const completed = tasks.filter(
      (task) => task.completed
    ).length;
  
    const pending = tasks.length - completed;
  
    return (
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white rounded-xl shadow p-5">
          <h2 className="text-gray-500">Total Tasks</h2>
          <p className="text-3xl font-bold">{tasks.length}</p>
        </div>
  
        <div className="bg-white rounded-xl shadow p-5">
          <h2 className="text-gray-500">Completed</h2>
          <p className="text-3xl font-bold text-green-600">
            {completed}
          </p>
        </div>
  
        <div className="bg-white rounded-xl shadow p-5">
          <h2 className="text-gray-500">Pending</h2>
          <p className="text-3xl font-bold text-orange-500">
            {pending}
          </p>
        </div>
      </div>
    );
  }
  
  export default Stats;