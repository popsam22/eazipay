import name_icon from "../assets/settings-name.svg";
import phone_icon from "../assets/settings-phone.svg";
import mail_icon from "../assets/settings-mail.svg";
import password_icon from "../assets/settings-password.svg";
import type { ListItemsProps } from "../interfaces/listItems.interface";

export const settingsItems: ListItemsProps[] = [
  { label: "Full name", title: "Abdullah Ghatasheh", icon: name_icon, iconBg: "#E6DDFF", actionLabel: "Edit" },
  { label: "Mobile", title: "+962 79 890 50 14", icon: phone_icon, iconBg: "#C9EBE5", actionLabel: "Edit" },
  { label: "Email", title: "abdgfx@gmail.com", icon: mail_icon, iconBg: "#E6F6EC", actionLabel: "Edit" },
  { label: undefined, title: "Change password", icon: password_icon, iconBg: "#FFD6D6" },
];
