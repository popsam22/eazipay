export interface ActionsCardProps {
  title: string;
  icon: string;
  subtitle?: string;
  value?: string;
  type?: "profit" | "loss";
  isLast?: boolean;
  description?: string;
  fullDate?: string;
  transactionNo?: string;
  onClick?: () => void;
}
