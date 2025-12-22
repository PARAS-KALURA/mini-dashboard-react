import React from 'react'

const Task = () => {
  return (
    <div className=' px-6 pt-10 mb-10 max-w-4xl' >
    {/* Header */}
    <header className='flex justify-between items-center' >
      <div className='space-y-1' >
      <h3 className='text-2xl font-semibold' >Task</h3>
      <p className='text-sm text-gray-500'>Manage and track your tasks</p>
      </div>
      
      <div>
        <button className='bg-blue-500 px-4 py-2 text-white rounded cursor-pointer hover:bg-blue-600' >+New Task</button>
      </div>
    </header>

    {/* Tasks */}

    <div className='divide-y border border-gray-300 mt-10' >
      <p className='' >1</p>
      <p>2</p>
      <p>3</p>
    </div>

    </div>
  )
}

export default Task