import { useLocation, useNavigate } from "react-router-dom";
import { navItems } from "@/constants/navbar";

const Navbar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t border-azureish-white dark:border-gray-700 flex justify-around" aria-label="Main navigation">
      {navItems.map((item) => {
        const isActive = pathname === item.path;
        return (
          <button
            key={item.path}
            onClick={() => item.path && navigate(item.path)}
            aria-label={item.label}
            aria-current={isActive ? "page" : undefined}
            className="relative flex flex-col items-center gap-1 flex-1 p-2"
          >
            {isActive && (
              <div className="absolute top-0 w-22.5 h-0.5 bg-majorelle-blue rounded-full" />
            )}
            <img
              src={isActive ? item.activeIcon : item.icon}
              alt={item.label}
              className={`w-6 h-6 ${
                isActive ? "active-icon" : "inactive-icon"
              }`}
            />
            <p
              className={`${
                isActive ? "text-majorelle-blue b7" : "text-black-coral dark:text-gray-400 r7"
              }`}
              aria-hidden="true"
            >
              {item.label}
            </p>
          </button>
        );
      })}
    </nav>
  );
};

export default Navbar;
