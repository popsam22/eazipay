import walmart_icon from "@/assets/Wallmart.svg";
import topup_icon from "@/assets/Topup.svg";
import netflix_icon from "@/assets/Netflix.svg";
import amazon_icon from "@/assets/Amazon.svg";
import nike_icon from "@/assets/image 8.svg";
import homedepot_icon from "@/assets/The home depot.svg";
import type { Transaction } from "@/interfaces/transaction.interface";
import type { ListItemsProps } from "@/interfaces/listItems.interface";

export const transactionData: Transaction[] = [
  {
    label: "Today",
    transactions: [
      {
        title: "Walmart",
        subtitle: "Today 12:32",
        value: "-$35.23",
        icon: walmart_icon,
        type: "loss",
        description: "Retailer purchase",
        fullDate: "December 29, 2022 - 12:32",
        transactionNo: "23010412432431",
      },
      {
        title: "Top up",
        subtitle: "Today 02:12",
        value: "+$430.00",
        icon: topup_icon,
        type: "profit",
        description: "Wallet top up",
        fullDate: "December 29, 2022 - 02:12",
        transactionNo: "23010412432432",
      },
      {
        title: "Netflix",
        subtitle: "Today 09:45",
        value: "-$13.00",
        icon: netflix_icon,
        type: "loss",
        description: "Streaming subscription",
        fullDate: "December 29, 2022 - 09:45",
        transactionNo: "23010412432433",
      },
    ],
  },
  {
    label: "Yesterday",
    transactions: [
      {
        title: "Amazon",
        subtitle: "Yesterday 12:32",
        value: "-$12.23",
        icon: amazon_icon,
        type: "loss",
        description: "Online shopping",
        fullDate: "December 28, 2022 - 12:32",
        transactionNo: "23010412432434",
      },
      {
        title: "Nike",
        subtitle: "Yesterday 02:12",
        value: "-$50.23",
        icon: nike_icon,
        type: "loss",
        description: "Footwear purchase",
        fullDate: "December 28, 2022 - 02:12",
        transactionNo: "23010412432435",
      },
      {
        title: "The Home Depot",
        subtitle: "Yesterday 13:53",
        value: "-$129.00",
        icon: homedepot_icon,
        type: "loss",
        description: "Furniture purchase",
        fullDate: "December 28, 2022 - 13:53",
        transactionNo: "23010412432436",
      },
    ],
  },
  {
    label: "December 27, 2022",
    subLabel: "Tuesday",
    transactions: [
      {
        title: "Amazon",
        subtitle: "Dec 27 11:10",
        value: "-$35.23",
        icon: amazon_icon,
        type: "loss",
        description: "Online shopping",
        fullDate: "December 27, 2022 - 11:10",
        transactionNo: "23010412432437",
      },
      {
        title: "Top up",
        subtitle: "Dec 27 08:00",
        value: "+$200.00",
        icon: topup_icon,
        type: "profit",
        description: "Wallet top up",
        fullDate: "December 27, 2022 - 08:00",
        transactionNo: "23010412432438",
      },
      {
        title: "Nike",
        subtitle: "Dec 27 14:30",
        value: "+$50.23",
        icon: nike_icon,
        type: "profit",
        description: "Refund",
        fullDate: "December 27, 2022 - 14:30",
        transactionNo: "23010412432439",
      },
    ],
  },
  {
    label: "December 26, 2022",
    subLabel: "Monday",
    transactions: [
      {
        title: "Walmart",
        subtitle: "Dec 26 10:15",
        value: "-$22.45",
        icon: walmart_icon,
        type: "loss",
        description: "Grocery shopping",
        fullDate: "December 26, 2022 - 10:15",
        transactionNo: "23010412432440",
      },
      {
        title: "Netflix",
        subtitle: "Dec 26 18:00",
        value: "-$13.00",
        icon: netflix_icon,
        type: "loss",
        description: "Streaming subscription",
        fullDate: "December 26, 2022 - 18:00",
        transactionNo: "23010412432441",
      },
      {
        title: "The Home Depot",
        subtitle: "Dec 26 16:45",
        value: "-$67.50",
        icon: homedepot_icon,
        type: "loss",
        description: "Tools & supplies",
        fullDate: "December 26, 2022 - 16:45",
        transactionNo: "23010412432442",
      },
    ],
  },
];

export const flatTransactions: ListItemsProps[] = transactionData.flatMap(
  (g) => g.transactions
);
