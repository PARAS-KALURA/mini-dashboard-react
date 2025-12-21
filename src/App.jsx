import React from 'react'

const App = () => {
  return (
    <>
    <aside
    className='min-h-screen w-60 bg-blue-600 text-white'
    >
      <h2 className='text-center pt-6  pb-8 text-2xl font-bold ' >My App</h2>
      <ul className='text-center p-4 flex gap-4 flex-col ' >

        <li className='border border-blue-900 rounded-sm px-2 py-1 cursor-pointer hover:scale-110 transition-transform' >Home</li>

        <li className='border border-blue-900 rounded-sm px-2 py-1 cursor-pointer hover:scale-110 transition-transform' >Dashboard</li>
        
        <li className='border border-blue-900 rounded-sm px-2 py-1 cursor-pointer hover:scale-110 transition-transform' >Task</li>

        <li className='border border-blue-900 rounded-sm px-2 py-1 cursor-pointer hover:scale-110 transition-transform' >Setting</li>

      </ul>
    </aside>
    </>
  )
}

export default App