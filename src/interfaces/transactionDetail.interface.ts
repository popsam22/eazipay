import type { ListItemsProps } from "@/interfaces/listItems.interface";

export interface TransactionDetailProps extends ListItemsProps {
  onClose: () => void;
}
