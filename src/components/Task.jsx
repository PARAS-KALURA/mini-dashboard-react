import React, { useState } from 'react'

const Task = () => {
  
  const [task, setTask] = useState([]);

  const addTask = () => {
    console.log("Added");
    
  }

  return (
    <div className=' px-6 pt-10 mb-10 max-w-4xl' >
    {/* Header */}
    <header className='flex justify-between items-center' >
      <div className='space-y-1' >
      <h3 className='text-2xl font-semibold' >Task</h3>
      <p className='text-sm text-gray-500'>Manage and track your tasks</p>

      </div>
      
      <div>
        <button  onClick={addTask} className='bg-blue-500 px-4 py-2 text-white rounded cursor-pointer hover:bg-blue-600' >+Add Task</button>
      </div>
    </header>


    {/* Input */}

    <div>
      <input className='w-full px-4 py-2 mt-4 '  type="text" placeholder='Add Task' value={task} onChange={(e) => setTask(e.target.value)} />
    </div>

    {/* Tasks */}
 
    <div className="divide-y border border-gray-300 rounded-md mt-2">
  <p className="p-3">1</p>
  <p className="p-3">2</p>
  <p className="p-3">3</p>
</div>


    </div>
  )
}

export default Task