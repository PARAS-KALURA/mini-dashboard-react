import { NavLink } from "react-router-dom";

const Sidebar = ({ userName }) => {
  const links = [

    { name: "Home", path: "/" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Task", path: "/task" },
    { name: "Setting", path: "/setting" },
  ];

  return (
    <aside className="bg-blue-600 w-60 min-h-screen text-white flex flex-col p-5">
      <h2 className="text-3xl font-bold text-center">KeKKa</h2>
      <p className="text-sm text-center mt-2">Welcome {userName}</p>

      <ul className="mt-10 flex flex-col gap-4">
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              `border rounded px-3 py-2 text-center transition-transform hover:scale-105 hover:bg-white hover:text-blue-900
              ${
                isActive
                  ? "bg-white text-blue-600 border-white"
                  : "border-blue-900 text-white"
              }`
            }
          >
            {link.name}
          </NavLink>
        ))}
      </ul>

      <button className="mt-auto border border-white cursor-pointer rounded px-3 py-2 hover:bg-red-600 hover:text-white">
        Logout
      </button>
    </aside>
  );
};

export default Sidebar;
