import type { FilterType } from "@/types/transaction.types";

export const filterOptions: { label: string; value: FilterType }[] = [
  { label: "All", value: "all" },
  { label: "Income", value: "profit" },
  { label: "Expense", value: "loss" },
];
