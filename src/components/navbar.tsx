import { Link } from "@tanstack/react-router";

const Navbar = () => {
  return (
    <nav className="z-10 flex justify-center items-center bg-white dark:bg-gray-900 shadow-md border-gray-200 dark:border-gray-600 border-b w-full h-16 text-white">
      <ul className="flex space-x-6 md:space-x-8 bg-transparent md:bg-transparent dark:bg-transparent p-4 md:p-0 rounded-lg font-medium">
        <li>
          <Link
            to="/"
            activeProps={{ className: "font-bold text-blue-400" }}
            className="group relative px-3 py-2 text-lg transition duration-300"
          >
            Crear
            <span className="bottom-0 left-0 absolute bg-blue-400 w-0 group-hover:w-full h-[2px] transition-all duration-300" />
          </Link>
        </li>
        <li>
          <Link
            to="/list"
            activeProps={{ className: "font-bold text-blue-400" }}
            className="group relative px-3 py-2 text-lg transition duration-300"
          >
            Listar
            <span className="bottom-0 left-0 absolute bg-blue-400 w-0 group-hover:w-full h-[2px] transition-all duration-300" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
