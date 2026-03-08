import pay_bills_icon from "../assets/more-pay-bills.svg";
import transfer_icon from "../assets/more-transfer.svg";
import topup_icon from "../assets/more-topup.svg";
import withdrawal_icon from "../assets/more-withdrawal.svg";
import analytics_icon from "../assets/more-analytics.svg";
import help_icon from "../assets/more-help.svg";
import contact_icon from "../assets/more-contact-us.svg";
import about_icon from "../assets/more-about.svg";
import type { ListItemsProps } from "../interfaces/listItems.interface";

export const primaryItems: ListItemsProps[] = [
  { title: "Pay bills", icon: pay_bills_icon, iconBg: "#E6DDFF" },
  { title: "Transfer", icon: transfer_icon, iconBg: "#E4EFFF" },
  { title: "Topup", icon: topup_icon, iconBg: "#E6F6EC" },
  { title: "Withdraw", icon: withdrawal_icon, iconBg: "#FFD6D6" },
  { title: "Analytics", icon: analytics_icon, iconBg: "#F2E1F2" },
];

export const secondaryItems: ListItemsProps[] = [
  { title: "Help", icon: help_icon, iconBg: "#FFECBA" },
  { title: "Contact us", icon: contact_icon, iconBg: "#C9EBE5" },
  { title: "About", icon: about_icon, iconBg: "#E6DDFF" },
];
