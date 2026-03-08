import walmart_icon from "../assets/Wallmart.svg";
import topup_icon from "../assets/Topup.svg";
import netflix_icon from "../assets/Netflix.svg";
import amazon_icon from "../assets/Amazon.svg";
import nike_icon from "../assets/image 8.svg";
import homedepot_icon from "../assets/The home depot.svg";
import type { Transaction } from "../interfaces/transaction.interface";

export const transaction: Transaction[] = [
  {
    label: "Today",
    transactions: [
      {
        title: "Walmart",
        subtitle: "Today 12:32",
        value: "-$35.23",
        icon: walmart_icon,
        description: "Retailer corporation",
        fullDate: "December 29, 2022 - 12:32",
        transactionNo: "23010412432431",
      },
      {
        title: "Top up",
        subtitle: "Yesterday 02:12",
        value: "+$430.00",
        icon: topup_icon,
        type: "profit",
        description: "Airtime purchase",
        fullDate: "December 28, 2022 - 02:12",
        transactionNo: "23010412432432",
      },
      {
        title: "Netflix",
        subtitle: "Dec 24 12:32",
        value: "-$13.00",
        icon: netflix_icon,
        description: "Streaming subscription",
        fullDate: "December 24, 2022 - 12:32",
        transactionNo: "23010412432433",
      },
    ],
  },
  {
    label: "Yesterday",
    transactions: [
      {
        title: "Amazon",
        subtitle: "Today 12:32",
        value: "-$12.23",
        icon: amazon_icon,
        description: "Shopping",
        fullDate: "December 29, 2022 - 12:32",
        transactionNo: "23010412432434",
      },
      {
        title: "Nike",
        subtitle: "Yesterday 02:12",
        value: "-$50.23",
        icon: nike_icon,
        description: "Shopping",
        fullDate: "December 28, 2022 - 02:12",
        transactionNo: "23010412432435",
      },
      {
        title: "The Home Depot",
        subtitle: "Dec 24 12:32",
        value: "-$129.00",
        icon: homedepot_icon,
        description: "Furniture purchase",
        fullDate: "December 24, 2022 - 13:53",
        transactionNo: "23010412432436",
      },
    ],
  },
  {
    label: "December 29, 2022",
    subLabel: "Thursday",
    transactions: [
      {
        title: "Amazon",
        subtitle: "Today 12:32",
        value: "-$35.23",
        icon: amazon_icon,
        description: "Shopping",
        fullDate: "December 29, 2022 - 12:32",
        transactionNo: "23010412432437",
      },
    ],
  },
];
