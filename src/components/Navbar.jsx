import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/task">Task</Link></li>
      <li><Link to="/dashboard">Dashboard</Link></li>
      <li><Link to="/setting">Setting</Link></li>
    </ul>
  );
};

export default Navbar;
