import type { ListItemsProps } from "./listItems.interface";

export interface TransactionDetailProps extends ListItemsProps {
  onClose: () => void;
}
