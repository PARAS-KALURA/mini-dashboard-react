import { useState } from "react";

const Task = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;

    setTasks([...tasks, task]);
    setTask("");
  };

  return (
    <div className="px-6 pt-10 mb-10 max-w-4xl">
      {/* Header */}
      <header className="flex justify-between items-center">
        <div className="space-y-1">
          <h3 className="text-2xl font-semibold">Task</h3>
          <p className="text-sm text-gray-500">
            Manage and track your tasks
          </p>
        </div>

        <button
          onClick={addTask}
          className="bg-blue-500 px-4 py-2 text-white rounded hover:bg-blue-600"
        >
          + Add Task
        </button>
      </header>

      {/* Input */}
      <input
        className="w-full px-4 py-2 mt-4 border rounded"
        type="text"
        placeholder="Add Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      {/* Tasks */}
      <div className="divide-y border border-gray-300 mt-2 rounded">
        {tasks.map((task, index) => (
          <p key={index} className="p-3">
            {task}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Task;
