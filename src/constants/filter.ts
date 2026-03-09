import type { FilterType } from "@/types/transaction.types";

export const filterOptions: { label: string; value: FilterType }[] = [
  { label: "All", value: "all" },
  { label: "Sent", value: "profit" },
  { label: "Received", value: "loss" },
];
