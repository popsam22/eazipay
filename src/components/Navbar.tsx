import { useLocation, useNavigate } from "react-router-dom";
import type { NavItem } from "../interfaces/navbar.interface";
import home_icon from "../assets/home-3-line.svg";
import home_active_icon from "../assets/home-3-fill.svg";
import history_icon from "../assets/file-list-3-line.svg";
import history_active_icon from "../assets/file-list-3-fill.svg";
import cards_icon from "../assets/wallet-line.svg";
import cards_active_icon from "../assets/wallet-fill.svg";
import more_icon from "../assets/bank-card-2-line.svg";
import more_active_icon from "../assets/bank-card-2-fill.svg";

const navItems: NavItem[] = [
  {
    label: "Home",
    icon: home_icon,
    activeIcon: home_active_icon,
    path: "/home",
  },
  {
    label: "History",
    icon: history_icon,
    activeIcon: history_active_icon,
    path: "/history",
  },
  {
    label: "Cards",
    icon: cards_icon,
    activeIcon: cards_active_icon,
    path: "/cards",
  },
  {
    label: "More",
    icon: more_icon,
    activeIcon: more_active_icon,
    path: "/more",
  },
];

const Navbar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-azureish-white flex justify-around">
      {navItems.map((item) => {
        const isActive = pathname === item.path;
        return (
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
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
                isActive ? "text-majorelle-blue b7" : "text-black-coral r7"
              }`}
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
