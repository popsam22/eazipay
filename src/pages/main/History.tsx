import { useState } from "react";
import search_icon from "../../assets/search-2-line.svg";
import filter_icon from "../../assets/equalizer-line.svg";
import ListItems from "../../components/ListItems";
import Navbar from "../../components/Navbar";
import TransactionDetail from "../../components/TransactionDetail";
import { transactionData } from "../../constants/transaction";
import type { ListItemsProps } from "../../interfaces/listItems.interface";

const History = () => {
  const [selected, setSelected] = useState<ListItemsProps | null>(null);

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
              placeholder="Value goes here"
              className="outline-none bg-inherit r6 text-black placeholder:text-silver-sand w-full"
            />
          </div>
          <button className="flex items-center gap-1.5 border border-azureish-white rounded-sm p-3">
            <img src={filter_icon} alt="filter icon" className="w-5 h-5" />
            <p className="r6 text-black">Filter</p>
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        {transactionData.map((group, index) => (
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
              {group.transactions.map((transaction, index) => (
                <ListItems
                  key={index}
                  {...transaction}
                  isLast={index === group.transactions.length - 1}
                  onClick={() => setSelected(transaction)}
                />
              ))}
            </div>
            {index < transactionData.length - 1 && (
              <div className="h-1.5 bg-alice-blue -mx-4 my-3" />
            )}
          </div>
        ))}
      </div>

      <Navbar />

      {selected && (
        <TransactionDetail {...selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
};

export default History;
