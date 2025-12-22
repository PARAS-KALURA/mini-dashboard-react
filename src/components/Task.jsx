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
    <div className="p-6 max-w-md">
      <h1 className="text-2xl font-bold mb-4">Add Task</h1>

      {/* Input + Button */}
      <div className="flex gap-2">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter task..."
          className="flex-1 border px-3 py-2 rounded"
        />

        <button
          onClick={addTask}
          className="bg-blue-600 text-white px-4 rounded hover:bg-blue-700"
        >
          Add
        </button>
      </div>

      {/* Task List */}
      <ul className="mt-4 space-y-2">
        {tasks.map((t, index) => (
          <li
            key={index}
            className="border px-3 py-2 rounded bg-gray-50"
          >
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Task;
