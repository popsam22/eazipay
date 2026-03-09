import { useState } from "react";
import search_icon from "@/assets/search-2-line.svg";
import filter_icon from "@/assets/equalizer-line.svg";
import ListItems from "@/components/ListItems";
import Navbar from "@/components/Navbar";
import TransactionDetail from "@/components/TransactionDetail";
import { transactionData } from "@/constants/transaction";
import { filterOptions } from "@/constants/filter";
import type { ListItemsProps } from "@/interfaces/listItems.interface";
import type { FilterType } from "@/types/transaction.types";

const History = () => {
  const [selected, setSelected] = useState<ListItemsProps | null>(null);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<FilterType>("all");
  const [showFilter, setShowFilter] = useState(false);

  const filteredData = transactionData
    .map((group) => ({
      ...group,
      transactions: group.transactions.filter((t) => {
        const matchesSearch = t.title
          .toLowerCase()
          .includes(search.toLowerCase());
        const matchesFilter =
          filter === "all" ||
          (filter === "loss"
            ? !t.type || t.type === "loss"
            : t.type === "profit");
        return matchesSearch && matchesFilter;
      }),
    }))
    .filter((group) => group.transactions.length > 0);

  return (
    <div className="py-6 px-4 flex flex-col gap-6 pb-24">
      <div className="flex flex-col gap-4">
        <h1 className="text-black b2">History</h1>
        <div className="flex gap-2">
          <div className="flex-1 flex items-center gap-2 border border-azureish-white rounded-sm py-2 px-3">
            <img
              src={search_icon}
              alt="search icon"
              className="object-contain w-5 h-5"
            />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search transactions..."
              className="outline-none bg-inherit r6 text-black placeholder:text-silver-sand w-full"
            />
          </div>
          <button
            onClick={() => setShowFilter(!showFilter)}
            className={`flex items-center gap-1.5 border rounded-sm p-3 transition-colors ${
              filter !== "all" || showFilter
                ? "border-ocean-blue bg-cloud"
                : "border-azureish-white"
            }`}
          >
            <img src={filter_icon} alt="filter icon" className="w-5 h-5" />
            <p className={`r6 ${filter !== "all" ? "text-ocean-blue" : "text-black"}`}>
              {filter !== "all"
                ? filterOptions.find((f) => f.value === filter)?.label
                : "Filter"}
            </p>
          </button>
        </div>
        {showFilter && (
          <div className="flex gap-2">
            {filterOptions.map((f) => (
              <button
                key={f.value}
                onClick={() => {
                  setFilter(f.value);
                  setShowFilter(false);
                }}
                className={`r7 px-4 py-1.5 rounded-full border transition-colors ${
                  filter === f.value
                    ? "bg-ocean-blue text-white border-ocean-blue"
                    : "text-slate-gray border-azureish-white"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="flex flex-col gap-3">
        {filteredData.length === 0 ? (
          <p className="r7 text-slate-gray text-center py-6">
            No transactions found
          </p>
        ) : (
          filteredData.map((group, index) => (
            <div key={index} className="flex flex-col gap-3">
              {group.subLabel ? (
                <div>
                  <p className="r7 text-slate-gray">{group.subLabel}</p>
                  <h2 className="r5 text-black-coral">{group.label}</h2>
                </div>
              ) : (
                <p className="r5 text-black-coral">{group.label}</p>
              )}
              <div className="flex flex-col gap-3">
                {group.transactions.map((transaction, i) => (
                  <ListItems
                    key={transaction.transactionNo}
                    {...transaction}
                    isLast={i === group.transactions.length - 1}
                    onClick={() => setSelected(transaction)}
                  />
                ))}
              </div>
              {index < filteredData.length - 1 && (
                <div className="h-1.5 bg-alice-blue -mx-4 my-3" />
              )}
            </div>
          ))
        )}
      </div>

      <Navbar />

      {selected && (
        <TransactionDetail {...selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
};

export default History;
