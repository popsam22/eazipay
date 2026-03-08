import type { ActionsCardProps } from "./actionsCard.interface";

export interface Transaction {
  label: string;
  subLabel?: string;
  transactions: ActionsCardProps[];
}
