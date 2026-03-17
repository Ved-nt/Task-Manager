import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-8 h-16 bg-gray-950 border-b border-white/10 backdrop-blur-md">
      {/* Brand */}
      <div className="flex items-center gap-2">
        <span className="text-yellow-400 text-xl">◈</span>
        <span className="font-extrabold text-lg tracking-tight text-white">
          Task Manager
        </span>
      </div>

      {/* Links */}
      <ul className="flex items-center gap-1 list-none">
        {[
          { to: "/", label: "Home" },
          { to: "/add-task", label: "Add Task" },
          { to: "/tasks", label: "All Tasks" },
        ].map(({ to, label }) => (
          <li key={to}>
            <NavLink
              to={to}
              end={to === "/"}
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-widest border transition-all duration-200 ${
                  isActive
                    ? "text-yellow-400 bg-yellow-400/10 border-yellow-400/30"
                    : "text-white/50 border-transparent hover:text-white hover:bg-white/5 hover:border-white/10"
                }`
              }
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
