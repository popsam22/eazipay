import type { ActionsCardProps } from "./actionsCard.interface";

export interface TransactionDetailProps extends ActionsCardProps {
  onClose: () => void;
}
