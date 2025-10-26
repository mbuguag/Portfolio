import { NavLink } from "react-router-dom";

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    `hover:text-green-400 transition-colors ${
      isActive ? "text-green-400 font-semibold" : "text-gray-200"
    }`;

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-lg text-white z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        <NavLink to="/" className="text-xl font-bold text-green-400">
          Mbugua.dev
        </NavLink>
        <div className="space-x-6">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/resume" className={linkClass}>Resume</NavLink>
          <NavLink to="/projects" className={linkClass}>Projects</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
