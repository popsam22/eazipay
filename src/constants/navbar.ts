import home_icon from "@/assets/home-3-line.svg";
import home_active_icon from "@/assets/home-3-fill.svg";
import history_icon from "@/assets/file-list-3-line.svg";
import history_active_icon from "@/assets/file-list-3-fill.svg";
import cards_icon from "@/assets/wallet-line.svg";
import cards_active_icon from "@/assets/wallet-fill.svg";
import more_icon from "@/assets/bank-card-2-line.svg";
import more_active_icon from "@/assets/bank-card-2-fill.svg";
import type { NavItem } from "@/interfaces/navbar.interface";

export const navItems: NavItem[] = [
  { label: "Home", icon: home_icon, activeIcon: home_active_icon, path: "/home" },
  { label: "History", icon: history_icon, activeIcon: history_active_icon, path: "/history" },
  { label: "Cards", icon: cards_icon, activeIcon: cards_active_icon },
  { label: "More", icon: more_icon, activeIcon: more_active_icon, path: "/more" },
];
