import copy_icon from "@/assets/file-copy-line.svg";
import flag_icon from "@/assets/flag-line.svg";
import type { TransactionDetailProps } from "@/interfaces/transactionDetail.interface";

const TransactionDetail = ({
  title,
  icon,
  description,
  subtitle,
  fullDate,
  transactionNo,
  value,
  type,
  onClose,
}: TransactionDetailProps) => {
  const valueColor =
    type === "profit" ? "text-sea-green" : "text-golden-gate-bridge";
  const amountBg = type === "profit" ? "bg-[#F0FFF4]" : "bg-snow";

  return (
    <div>
      <div className="fixed inset-0 bg-black opacity-70" onClick={onClose} />
      <div className="fixed bottom-0 left-0 right-0 bg-white rounded-t-2xl p-4 pb-10 flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <img src={icon} alt={title} className="w-14 h-14 object-contain" />
          <div className="flex-1">
            <h2 className="b5 text-black">{title}</h2>
            {description && <p className="r6 text-slate-gray">{description}</p>}
          </div>
          <button onClick={onClose} className="text-celtic-blue b6">
            Done
          </button>
        </div>

        <div className={`${amountBg} flex justify-center rounded-lg px-2 py-4`}>
          <p className={`b3 ${valueColor}`}>{value}</p>
        </div>

        <div className="border border-alice-blue rounded-lg py-3 px-4 flex justify-between items-center">
          <div className="flex flex-col">
            <p className="r7 text-slate-gray">{subtitle}</p>
            <p className="b7 text-black-coral">{fullDate}</p>
          </div>
        </div>

        <div className="border border-alice-blue rounded-lg py-3 px-4 flex justify-between items-center">
          <div className="flex flex-col">
            <p className="r7 text-slate-gray">Transaction no.</p>
            <p className="b7 text-black-coral">{transactionNo}</p>
          </div>
          <button
            onClick={() =>
              transactionNo && navigator.clipboard.writeText(transactionNo)
            }
          >
            <img
              src={copy_icon}
              alt="copy"
              className="object-contain w-6 h-6"
            />
          </button>
        </div>

        <button className="flex items-center justify-center gap-2 mt-2">
          <img src={flag_icon} alt="report" className="w-5 h-5" />
          <p className="b6 text-golden-gate-bridge">Report a problem</p>
        </button>
      </div>
    </div>
  );
};

export default TransactionDetail;
