import type { ListItemsProps } from "@/interfaces/listItems.interface";

export interface Transaction {
  label: string;
  subLabel?: string;
  transactions: ListItemsProps[];
}
