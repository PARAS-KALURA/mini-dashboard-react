import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <>
            <aside className=' bg-blue-600 text-center w-60 min-h-screen text-white pt-10'>
                <h2 className='font-bold text-3xl text-center' >My App</h2>
                <ul className="text-center p-4 flex flex-col gap-4 pt-20">
                    <Link
                        className="border border-blue-900 rounded-sm px-2 py-1 cursor-pointer
          hover:scale-105 transition-transform"
                        to="/"
                    >
                        Home
                    </Link>

                    <Link
                        className="border border-blue-900 rounded-sm px-2 py-1 cursor-pointer
          hover:scale-105 transition-transform"
                        to="/dashboard"
                    >
                        Dashboard
                    </Link>

                    <Link
                        className="border border-blue-900 rounded-sm px-2 py-1 cursor-pointer
          hover:scale-105 transition-transform"
                        to="/task"
                    >
                        Task
                    </Link>

                    <Link
                        className="border border-blue-900 rounded-sm px-2 py-1 cursor-pointer
          hover:scale-105 transition-transform"
                        to="/setting"
                    >
                        Setting
                    </Link>
                </ul>

            </aside>
        </>
    )
}

export default Sidebar