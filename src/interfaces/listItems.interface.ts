export interface ListItemsProps {
  title: string;
  icon: string;
  subtitle?: string;
  value?: string;
  type?: "profit" | "loss";
  isLast?: boolean;
  iconBg?: string;
  label?: string;
  actionLabel?: string;
  description?: string;
  fullDate?: string;
  transactionNo?: string;
  onClick?: () => void;
}
