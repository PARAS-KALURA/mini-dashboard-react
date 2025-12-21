import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = ({ userName }) => {
    return (
        <>
            <aside className=' bg-blue-600 text-center w-60 min-h-screen text-white pt-10'>
                <h2 className='font-bold text-3xl text-center' >My App</h2>
                <p className='pt-6' >Welcome {userName}</p>
                <ul className="text-center p-4 flex flex-col gap-4 pt-10">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `border rounded-sm px-2 py-1 cursor-pointer transition-transform hover:scale-105
     ${isActive
                                ? "bg-white text-blue-600 border-white"
                                : "border-blue-900 text-white"}`
                        }
                    >
                        Home
                    </NavLink>


                    <NavLink
                    to='/dashboard'
                        className={ ({isActive}) =>
                            `border border-blue-900 rounded-sm px-2 py-1 cursor-pointer
          hover:scale-105 transition-transform   
            ${isActive ? 'bg-white text-blue-900 border-white': 'border-blue-900 text-white '  }`}
                        
                    >
                        Dashboard
                    </NavLink>

                    <NavLink
                    to="/task"
                        className={  ({isActive}) => 
                            `border border-blue-900 rounded-sm px-2 py-1 cursor-pointer
          hover:scale-105 transition-transform
          ${isActive ? 'bg-white text-blue-900': 'text-white' }`}
                        
                    >
                        Task
                    </NavLink>
 
                    <NavLink
                    to="/setting"
                        className={ ({isActive}) =>
                              `border border-blue-900 rounded-sm px-2 py-1 cursor-pointer
          hover:scale-105 transition-transform

          ${isActive ? 'bg-white text-blue-900': 'text-white  ' }`}
                        
                    >
                        Setting
                    </NavLink>
                </ul>

            </aside>
        </>
    )
}

export default Sidebar