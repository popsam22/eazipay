export interface ActionsCardProps {
  title: string;
  icon: string;
  subtitle?: string;
  value?: string;
  type?: "profit" | "loss";
  isLast?: boolean;
  iconBg?: string;
  description?: string;
  fullDate?: string;
  transactionNo?: string;
  onClick?: () => void;
}
