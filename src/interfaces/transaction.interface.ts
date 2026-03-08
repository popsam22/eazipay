import type { ListItemsProps } from "./listItems.interface";

export interface Transaction {
  label: string;
  subLabel?: string;
  transactions: ListItemsProps[];
}
