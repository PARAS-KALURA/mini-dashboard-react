import React from 'react'
import { NavLink } from 'react-router-dom';

const p = () => {
  
    const links = [
        {name: "Home", path: "/"},
        {name: "Task", path: "/task"},
    ];

  return (
    <>
    {links.map((link) => 
        (
        <NavLink to={link.path} key={link.path}>{link.name}</NavLink>
    ))}
    </>
  )
}

export default p